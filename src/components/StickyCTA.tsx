"use client";

import { useEffect, useRef, useState } from "react";

export function StickyCTA() {
	const [visible, setVisible] = useState(false);
	const hasLeftHeroRef = useRef(false);

	useEffect(() => {
		const hero = document.getElementById("hero");
		if (!hero) {
			const id = window.setTimeout(() => setVisible(true), 0);
			return () => window.clearTimeout(id);
		}
		const io = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!entry) return;
				const inView = entry.isIntersecting;
				if (!inView) hasLeftHeroRef.current = true;
				setVisible(hasLeftHeroRef.current && !inView);
			},
			{ threshold: 0.2 }
		);
		io.observe(hero);
		return () => io.disconnect();
	}, []);

	if (!visible) return null;

	return (
		<div className="fixed bottom-8 right-8 z-50 animate-fade-in">
			<a
				href="#book-call"
				className="inline-flex items-center justify-center font-semibold text-xs uppercase tracking-[0.18em]"
				style={{
					background: "var(--editorial-accent)",
					color: "var(--editorial-paper)",
					border: "2px solid var(--editorial-accent)",
					padding: "var(--spacing-md) var(--spacing-xl)",
					minHeight: "44px",
					transition: "opacity 0.2s ease",
					borderRadius: "3px",
				}}
				onMouseEnter={(e) => {
					(e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
				}}
				onMouseLeave={(e) => {
					(e.currentTarget as HTMLAnchorElement).style.opacity = "1";
				}}
			>
				Book my strategy call
			</a>
		</div>
	);
}
