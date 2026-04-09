"use client";

export function ConversionClose() {
	return (
		<>
			<section
				id="book-call"
				className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 scroll-mt-24"
				style={{
					paddingTop: "var(--spacing-5xl)",
					paddingBottom: "var(--spacing-5xl)",
					background: "var(--editorial-dark-bg)",
				}}
			>
				<div className="max-w-3xl mx-auto text-center">
					<div
						className="w-12 h-0.5 mx-auto mb-6"
						style={{ background: "var(--editorial-accent)" }}
					/>
					<h2
						className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-balance"
						style={{
							fontFamily: "var(--font-editorial), serif",
							color: "var(--editorial-dark-text)",
							marginBottom: "var(--spacing-lg)",
							lineHeight: 1.22,
						}}
					>
						<span className="block">Stop bleeding revenue.</span>
						<span className="block mt-2 sm:mt-3">Book your free live demo now.</span>
					</h2>
					<p
						className="mx-auto max-w-xl"
						style={{
							color: "var(--editorial-dark-muted)",
							fontSize: "1.0625rem",
							lineHeight: 1.6,
							marginBottom: "var(--spacing-2xl)",
							fontWeight: 500,
						}}
					>
						Live in 14 days. Pick a time below—see if your dealership qualifies.
					</p>

					<div
						className="flex flex-col items-center justify-center min-h-[640px] px-6 py-16"
						style={{
							border: "1px solid var(--editorial-dark-hairline)",
							background: "var(--editorial-dark-surface)",
						}}
					>
						<p
							className="text-center font-semibold uppercase tracking-[0.12em] text-sm sm:text-base"
							style={{
								fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
								color: "var(--editorial-dark-text)",
								lineHeight: 1.5,
							}}
						>
							[CALENDLY WIDGET EMBED HERE]
						</p>
					</div>
				</div>
			</section>

			<footer
				className="px-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
				style={{
					paddingTop: "var(--spacing-xl)",
					paddingBottom: "var(--spacing-xl)",
					borderTop: "2px solid var(--editorial-accent)",
					background: "var(--editorial-dark-bg)",
				}}
			>
				<div className="max-w-6xl mx-auto text-center">
					<p
						className="text-xs tracking-[0.12em] font-medium uppercase"
						style={{ color: "var(--editorial-dark-muted)" }}
					>
						© {new Date().getFullYear()} Lohmont Agency
					</p>
				</div>
			</footer>
		</>
	);
}
