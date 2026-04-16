"use client";

import { useMemo } from "react";

export function AudioDemo({ className = "" }: { className?: string }) {
	const bars = useMemo(() => {
		const count = 28;
		const base = 0.25;
		const max = 0.95;
		return Array.from({ length: count }, (_, i) => {
			const phase = (i / count) * Math.PI * 2;
			const anim = (Math.sin(phase) + 1) / 2;
			return base + (max - base) * (0.25 * anim + 0.15);
		});
	}, []);

	return (
		<div
			className={`flex flex-col h-full min-h-0 p-4 sm:p-6 ${className}`}
			style={{
				background: "var(--editorial-paper)",
			}}
		>
			<div
				className="text-xs uppercase font-semibold tracking-[0.15em] shrink-0"
				style={{ color: "var(--editorial-accent)", marginBottom: "var(--spacing-sm)" }}
			>
				Live demo
			</div>
			<h3
				className="text-lg sm:text-xl font-semibold tracking-tight shrink-0"
				style={{ color: "var(--editorial-ink)", marginBottom: "var(--spacing-xs)" }}
			>
				Hear the AI qualify a lead, live.
			</h3>
			<p
				className="text-sm sm:text-base shrink-0"
				style={{
					color: "var(--editorial-ink-muted)",
					marginBottom: "var(--spacing-md)",
					lineHeight: 1.5,
					fontWeight: 500,
				}}
			>
				A real buyer call demo is coming soon.
			</p>

			<div className="flex-1 flex flex-col justify-center min-h-0 gap-3 overflow-y-auto">
				<div className="flex items-center gap-3 sm:gap-4 min-h-0 shrink-0">
					<button
						type="button"
						className="inline-flex items-center justify-center font-semibold text-xs uppercase tracking-widest shrink-0"
						style={{
							border: "1px solid var(--editorial-hairline-strong)",
							color: "var(--editorial-gray)",
							background: "transparent",
							padding: "0.65rem 0.85rem",
							minHeight: "44px",
							opacity: 0.7,
							cursor: "not-allowed",
						}}
						disabled
						aria-disabled="true"
					>
						Play Simulated Interaction
					</button>
					<div className="flex-1 min-w-0">
						<div className="flex items-end gap-0.5 h-10">
							{bars.map((h, idx) => (
								<div
									key={idx}
									className="rounded-sm"
									style={{
										width: "3px",
										height: `${Math.round(h * 40)}px`,
										background: "var(--editorial-hairline-strong)",
										transition: "height 0.12s ease",
									}}
								/>
							))}
						</div>
						<div
							className="mt-1.5 h-0.5 w-full overflow-hidden"
							style={{ background: "var(--editorial-hairline)" }}
						>
							<div style={{ width: "0%", height: "100%", background: "var(--editorial-accent)" }} />
						</div>
						<p className="text-xs sm:text-sm mt-1.5" style={{ color: "var(--editorial-ink-muted)" }}>
							Demo audio coming soon.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
