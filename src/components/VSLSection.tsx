"use client";

import { AudioDemo } from "./AudioDemo";

const VIMEO_VIDEO_ID = "76979871";

export function VSLSection() {
	return (
		<section
			id="how-it-works"
			className="px-6"
			style={{
				paddingTop: "var(--spacing-4xl)",
				paddingBottom: "var(--spacing-4xl)",
			}}
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 items-start">
				{/* Row 1 col 1: VSL headline */}
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
				</div>

				{/* Row 1 col 2: Revuelto copy (scroll anchor) */}
				<div
					id="live-ai-demo"
					className="scroll-mt-24 pt-8 sm:pt-10 lg:pt-12"
				>
					<p
						style={{
							color: "var(--editorial-ink-muted)",
							fontSize: "1.125rem",
							lineHeight: 1.6,
							fontWeight: 500,
						}}
					>
						Hear our AI handle a 1001-HP Revuelto inquiry, qualify the buyer,
						and book the appointment... in real time... 24/7.
					</p>
				</div>

				{/* Row 2: video and live demo */}
				<div
					className="aspect-video w-full min-h-0 overflow-hidden bg-black"
					style={{
						boxShadow: "0 24px 64px rgba(11, 11, 11, 0.15)",
						border: "1px solid var(--editorial-hairline-strong)",
					}}
				>
					<iframe
						className="w-full h-full"
						src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?title=0&byline=0&portrait=0`}
						title="Video Sales Letter"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
					/>
				</div>

				<div
					className="aspect-video w-full min-h-0 overflow-hidden"
					style={{
						boxShadow: "0 24px 64px rgba(11, 11, 11, 0.15)",
						border: "1px solid var(--editorial-hairline-strong)",
					}}
				>
					<AudioDemo className="min-h-0" />
				</div>
			</div>
		</section>
	);
}
