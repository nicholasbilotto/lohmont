#!/usr/bin/env bash
# Encodes assets/video/hero-source.mov into the two muted, seamless-loop files the hero uses.
# The last second crossfades into the first so the loop point is invisible.
# Usage: scripts/encode-hero.sh [duration-seconds]   (default reads it from the file)
set -euo pipefail
SRC="assets/video/hero-source.mov"
D="${1:-$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SRC")}"
T=$(python3 -c "print(round($D-1,3))")
FC="[0:v]split=3[a][b][c];[a]trim=start=1:end=$T,setpts=PTS-STARTPTS,fps=30[mid];[b]trim=start=$T,setpts=PTS-STARTPTS,fps=30[tail];[c]trim=start=0:end=1,setpts=PTS-STARTPTS,fps=30[head];[tail][head]xfade=transition=fade:duration=1:offset=0[seam];[seam][mid]concat=n=2:v=1:a=0,fps=30[out]"
mkdir -p public/video
ffmpeg -v error -y -i "$SRC" -filter_complex "$FC" -map "[out]" -an -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -profile:v high -level 4.1 -movflags +faststart -s 1920x1080 public/video/hero-1080.mp4
ffmpeg -v error -y -i "$SRC" -filter_complex "$FC" -map "[out]" -an -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -profile:v main -movflags +faststart -s 1280x720 public/video/hero-720.mp4
ffmpeg -v error -y -i public/video/hero-1080.mp4 -frames:v 1 -q:v 2 assets/stills/hero-poster.jpg
node scripts/prep-stills.mjs
ls -la public/video
