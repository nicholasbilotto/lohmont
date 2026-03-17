"use client";

import Player from "@vimeo/player";
import { useEffect, useMemo, useRef, useState } from "react";
import { AudioDemo } from "./AudioDemo";

const TIME_TO_SHOW_BUTTON = 720;
const VIMEO_VIDEO_ID = "76979871";

export function VSLSection({
	onCTAClick,
	onVSLUnlock,
}: {
	onCTAClick: () => void;
	onVSLUnlock?: () => void;
}) {
	const [showCTA, setShowCTA] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const playerRef = useRef<Player | null>(null);
	const [seconds, setSeconds] = useState<number | null>(null);

	useEffect(() => {
		if (!iframeRef.current) return;
		const player = new Player(iframeRef.current);
		playerRef.current = player;
		let unlocked = false;
		const onTimeUpdate = (data: { seconds: number }) => {
			setSeconds(data.seconds);
			if (!unlocked && data.seconds >= TIME_TO_SHOW_BUTTON) {
				unlocked = true;
				setShowCTA(true);
				onVSLUnlock?.();
			}
		};
		player.on("timeupdate", onTimeUpdate);
		player.on("seeked", async () => {
			try {
				const t = await player.getCurrentTime();
				setSeconds(t);
				if (!unlocked && t >= TIME_TO_SHOW_BUTTON) {
					unlocked = true;
					setShowCTA(true);
					onVSLUnlock?.();
				}
			} catch {
				// ignore
			}
		});
		return () => {
			try {
				player.off("timeupdate", onTimeUpdate);
				playerRef.current?.destroy();
			} catch {
				// ignore
			} finally {
				playerRef.current = null;
			}
		};
	}, [onVSLUnlock]);

	const remaining = useMemo(() => {
		if (seconds === null) return null;
		return Math.max(0, Math.ceil(TIME_TO_SHOW_BUTTON - seconds));
	}, [seconds]);

	return (
		<section
			id="how-it-works"
			className="px-6"
			style={{
				paddingTop: "var(--spacing-4xl)",
				paddingBottom: "var(--spacing-4xl)",
			}}
		>
			<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<div className="space-y-6">
					<div>
						<div
							className="w-12 h-0.5 mb-6"
							style={{ background: "var(--editorial-accent)" }}
						/>
						<h3
							className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
							style={{
								fontFamily: "var(--font-editorial), serif",
								color: "var(--editorial-ink)",
								marginBottom: "var(--spacing-lg)",
								lineHeight: 1.2,
							}}
						>
							Your new best sales rep. Never takes a break.
						</h3>
						<p
							className="max-w-md"
							style={{
								color: "var(--editorial-ink-muted)",
								fontSize: "1.125rem",
								lineHeight: 1.6,
							}}
						>
							Hear our AI handle a 1001-HP Revuelto inquiry, qualify the
							buyer, and book the appointment... in real time... 24/7.
						</p>
					</div>

					<div
						className="overflow-hidden bg-black"
						style={{
							boxShadow: "0 24px 64px rgba(11, 11, 11, 0.15)",
							border: "1px solid var(--editorial-hairline-strong)",
						}}
					>
						<div className="aspect-video">
							<iframe
								ref={iframeRef}
								className="w-full h-full"
								src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?title=0&byline=0&portrait=0`}
								title="Video Sales Letter"
								allow="autoplay; fullscreen; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
					<div
						className="flex items-center justify-between gap-4 py-4"
						style={{
							borderTop: "2px solid var(--editorial-accent)",
							borderBottom: "2px solid var(--editorial-accent)",
						}}
					>
						<p
							className="text-sm tracking-[0.02em]"
							style={{ color: "var(--editorial-ink-muted)" }}
						>
							(12–20 min). Watch it once. You’ll never go back to
							voicemail.
						</p>
						{!showCTA && (
							<div
								className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
								style={{
									color: "var(--editorial-gray)",
									border: "1px solid var(--editorial-accent)",
									padding: "0.5rem 0.75rem",
									background: "var(--editorial-accent-soft)",
								}}
							>
								<span
									style={{
										color: "var(--editorial-accent)",
										fontWeight: 700,
									}}
								>
									LOCKED
								</span>
								<span>
									{remaining === null
										? "Unlocks after the core thesis."
										: `Unlocks in ~${remaining}s`}
								</span>
							</div>
						)}
					</div>

					<div
						className={`transition-all duration-500 ${showCTA ? "opacity-100 visible" : "opacity-0 invisible max-h-0 overflow-hidden"}`}
						style={{
							borderTop: "2px solid var(--editorial-accent)",
							paddingTop: "var(--spacing-xl)",
						}}
					>
						<p
							className="text-xs uppercase font-semibold tracking-[0.15em] mb-3"
							style={{ color: "var(--editorial-accent)" }}
						>
							Unlocked
						</p>
						<p
							className="mb-5 font-semibold"
							style={{
								color: "var(--editorial-ink)",
								fontSize: "1.125rem",
								lineHeight: 1.5,
							}}
						>
							Yes, build my autonomous conversion engine.
						</p>
						<button
							onClick={onCTAClick}
							className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-[0.875rem] uppercase tracking-[0.14em]"
							style={{
								background: "var(--editorial-accent)",
								color: "var(--editorial-paper)",
								borderRadius: "0",
								padding: "var(--spacing-md) var(--spacing-xl)",
								border: "none",
								transition: "opacity 0.2s ease",
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLButtonElement).style.opacity =
									"0.9";
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLButtonElement).style.opacity =
									"1";
							}}
						>
							Yes, build my autonomous conversion engine.
						</button>
					</div>
				</div>

				<div>
					<AudioDemo />
				</div>
			</div>
		</section>
	);
}
