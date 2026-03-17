"use client";

import { useMemo } from "react";

export function AudioDemo() {
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
			className="p-6"
			style={{
				border: "1px solid var(--editorial-hairline-strong)",
				background: "var(--editorial-paper)",
			}}
		>
			<div className="text-xs uppercase font-semibold tracking-[0.15em]" style={{ color: "var(--editorial-accent)", marginBottom: "var(--spacing-sm)" }}>
				Live demo
			</div>
			<h3 className="text-xl font-semibold tracking-tight" style={{ color: "var(--editorial-ink)", marginBottom: "var(--spacing-xs)" }}>
				Hear the AI qualify a lead, live.
			</h3>
			<p className="text-base" style={{ color: "var(--editorial-ink-muted)", marginBottom: "var(--spacing-lg)", lineHeight: 1.55, fontWeight: 500 }}>
				This module is art-directed to demonstrate the UX. Add a real voice demo to unlock playback.
			</p>

			<div className="flex items-center gap-4">
				<button
					className="inline-flex items-center justify-center font-semibold text-xs uppercase tracking-widest"
					style={{
						border: "1px solid var(--editorial-hairline-strong)",
						color: "var(--editorial-gray)",
						background: "transparent",
						padding: "0.75rem 1rem",
						minHeight: "44px",
						minWidth: "44px",
						opacity: 0.7,
						cursor: "not-allowed",
					}}
					disabled
					aria-disabled="true"
				>
					Play Simulated Interaction
				</button>
				<div className="flex-1">
					<div className="flex items-end gap-0.5 h-10">
						{bars.map((h, idx) => (
							<div
								key={idx}
								className="rounded-sm"
								style={{ width: "3px", height: `${Math.round(h * 40)}px`, background: "var(--editorial-hairline-strong)", transition: "height 0.12s ease" }}
							/>
						))}
					</div>
					<div className="mt-2 h-0.5 w-full overflow-hidden" style={{ background: "var(--editorial-hairline)" }}>
						<div style={{ width: "0%", height: "100%", background: "var(--editorial-accent)" }} />
					</div>
					<p className="text-sm mt-2" style={{ color: "var(--editorial-ink-muted)" }}>Add the real demo audio later for playback.</p>
				</div>
			</div>

			<div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--editorial-hairline)" }}>
				<div className="flex items-center gap-2 flex-wrap">
					<Badge>RAG</Badge>
					<Badge>&lt;300ms retrieval</Badge>
					<Badge>CRM writeback</Badge>
					<Badge>Multilingual</Badge>
				</div>
			</div>
		</div>
	);
}

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span
			style={{
				border: "1px solid var(--editorial-hairline-strong)",
				color: "var(--editorial-ink-muted)",
				background: "transparent",
				padding: "0.3rem 0.5rem",
				fontSize: "0.7rem",
				letterSpacing: "0.04em",
				whiteSpace: "nowrap",
				textTransform: "uppercase",
			}}
		>
			{children}
		</span>
	);
}
