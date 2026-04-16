"use client";

export function Hero({ onBookTestCallClick }: { onBookTestCallClick: () => void }) {
	return (
		<section id="hero" className="relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-6 text-center pt-4 sm:pt-5">
				<span
					className="font-serif uppercase text-[0.8125rem] inline-block"
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

			<div
				className="max-w-3xl mx-auto px-6 text-center"
				style={{
					paddingTop: "var(--spacing-5xl)",
					paddingBottom: "var(--spacing-5xl)",
				}}
			>
				<h1
					className="font-serif tracking-tight text-balance mx-auto"
					style={{
						fontFamily: "var(--font-editorial), serif",
						color: "var(--editorial-ink)",
						fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
						lineHeight: 1.18,
						fontWeight: 700,
					}}
				>
					Stop Losing $40,000 Deals to Missed Calls and Slow Follow-Ups.
				</h1>

				<h2
					className="mt-5 sm:mt-6 mx-auto max-w-2xl text-balance text-center"
					style={{
						fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
						color: "var(--editorial-ink-muted)",
						fontSize: "clamp(1.0625rem, 2.1vw, 1.375rem)",
						lineHeight: 1.55,
						fontWeight: 500,
					}}
				>
					We install AI that responds to every inbound lead in under 60 seconds,
					reactivates the dead contacts rotting in your CRM, and books
					test-drive appointments around the clock — with zero lift from your team.
				</h2>

				<div className="mt-8 sm:mt-10 flex justify-center">
					<button
						type="button"
						onClick={onBookTestCallClick}
						className="inline-flex items-center justify-center font-semibold text-[0.8125rem] sm:text-[0.875rem] uppercase tracking-[0.14em] w-full sm:w-auto"
						style={{
							background: "var(--editorial-accent)",
							color: "var(--editorial-paper)",
							borderRadius: "3px",
							padding: "1rem 1.75rem",
							minHeight: "52px",
							transition: "opacity 0.2s ease, transform 0.2s ease",
							border: "2px solid var(--editorial-accent)",
							boxShadow: "0 6px 24px rgba(225, 0, 0, 0.2)",
							fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLButtonElement).style.opacity = "0.94";
							(e.currentTarget as HTMLButtonElement).style.transform =
								"translateY(-1px)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLButtonElement).style.opacity = "1";
							(e.currentTarget as HTMLButtonElement).style.transform =
								"translateY(0)";
						}}
					>
						Book a live demo
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
