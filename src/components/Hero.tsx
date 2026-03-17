"use client";

export function Hero({ onCTAClick }: { onCTAClick: () => void }) {
	return (
		<section
			id="hero"
			className="relative overflow-hidden"
			style={{ paddingTop: "var(--spacing-md)" }}
		>
			<div className="max-w-6xl mx-auto px-6 mb-3 text-center">
				<span
					className="font-serif uppercase text-[0.8125rem]"
					style={{
						fontFamily: "var(--font-editorial), serif",
						color: "var(--editorial-ink)",
						letterSpacing: "0.35em",
						fontWeight: 600,
					}}
				>
					Lohmont
				</span>
			</div>

			<div className="relative w-full aspect-[21/9] bg-black overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
					style={{
						filter: "saturate(0.95) contrast(1.06) brightness(0.88)",
						transform: "scale(1.04)",
					}}
					src="https://tln9b3aheyjeg0bd.public.blob.vercel-storage.com/hero.mov"
					title="Cinematic luxury automotive"
				/>
			</div>

			<div
				className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
				style={{
					paddingTop: "var(--spacing-3xl)",
					paddingBottom: "var(--spacing-4xl)",
				}}
			>
				<h1
					className="font-serif tracking-tight md:pr-8 max-w-xl"
					style={{
						fontFamily: "var(--font-editorial), serif",
						color: "var(--editorial-ink)",
						fontSize: "clamp(2rem, 3.2vw, 3rem)",
						lineHeight: 1.32,
						fontWeight: 500,
					}}
				>
					<span style={{ display: "block" }}>
						Turn{" "}
						<span
							className="editorial-highlight"
							style={{ color: "var(--editorial-paper)" }}
						>
							Static Inventory
						</span>
					</span>
					<span style={{ display: "block" }}>
						Into Scheduled{" "}
						<span
							className="editorial-highlight"
							style={{ color: "var(--editorial-paper)" }}
						>
							Test Drives
						</span>{" "}
						in{" "}
						<span
							className="editorial-highlight"
							style={{ color: "var(--editorial-paper)" }}
						>
							14 Days…
						</span>
					</span>
					<span
						style={{
							display: "block",
							marginTop: "0.35em",
							fontSize: "0.8em",
							lineHeight: 1.3,
							fontWeight: 500,
							color: "var(--editorial-ink-muted)",
						}}
					>
						Without your team lifting a finger.
					</span>
				</h1>

				<div className="flex md:justify-end">
					<button
						onClick={onCTAClick}
						className="inline-flex items-center justify-center font-semibold text-[0.875rem] uppercase tracking-[0.18em] w-full md:w-auto"
						style={{
							background: "var(--editorial-accent)",
							color: "var(--editorial-paper)",
							borderRadius: "0",
							padding: "var(--spacing-md) var(--spacing-2xl)",
							minHeight: "48px",
							transition: "opacity 0.2s ease",
							border: "2px solid var(--editorial-accent)",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLButtonElement).style.opacity =
								"0.92";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLButtonElement).style.opacity = "1";
						}}
					>
						Request a Custom Dealership Audit
					</button>
				</div>
			</div>

			<div
				className="w-full"
				style={{
					height: "1px",
					background: "var(--editorial-hairline-strong)",
				}}
			/>
		</section>
	);
}
