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
					<div
						className="text-xs uppercase font-bold tracking-[0.2em] mb-4"
						style={{ color: "var(--editorial-accent)" }}
					>
						Free Pilot — No Cost. No Commitment.
					</div>
					<h2
						className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-balance"
						style={{
							fontFamily: "var(--font-editorial), serif",
							color: "var(--editorial-dark-text)",
							marginBottom: "var(--spacing-lg)",
							lineHeight: 1.22,
						}}
					>
						<span className="block">We&apos;ll reactivate your dead leads.</span>
						<span className="block mt-2 sm:mt-3">At zero cost. Zero risk.</span>
					</h2>
					<p
						className="mx-auto max-w-xl"
						style={{
							color: "var(--editorial-dark-muted)",
							fontSize: "1.0625rem",
							lineHeight: 1.6,
							marginBottom: "var(--spacing-lg)",
							fontWeight: 500,
						}}
					>
						Give us your 30–90 day dead leads — full list, no cap. We run a
						complete AI SMS reactivation campaign at no cost and no commitment.
						You see real results before you spend a dollar on the Midnight
						Million System.
					</p>

					<p
						className="mx-auto max-w-xl font-semibold"
						style={{
							color: "var(--editorial-accent)",
							fontSize: "0.9375rem",
							lineHeight: 1.6,
							letterSpacing: "0.02em",
							marginBottom: "var(--spacing-2xl)",
						}}
					>
						Available to the first 5 founding Orange County dealerships only.
					</p>

					<div
						className="flex flex-col items-center justify-center min-h-[280px] px-6 py-16"
						style={{
							border: "1px solid var(--editorial-dark-hairline)",
							background: "var(--editorial-dark-surface)",
						}}
					>
						<p
							className="text-center font-semibold mb-2"
							style={{
								color: "var(--editorial-dark-text)",
								fontSize: "1.125rem",
								lineHeight: 1.5,
								fontFamily: "var(--font-editorial), serif",
							}}
						>
							Get Your Free Lead Reactivation Audit
						</p>
						<p
							className="text-center"
							style={{
								color: "var(--editorial-dark-muted)",
								fontSize: "1.0625rem",
								lineHeight: 1.7,
								fontWeight: 500,
							}}
						>
							Booking calendar coming soon. In the meantime, reach us at:
						</p>
						<p
							className="text-center font-semibold mt-3"
							style={{
								fontFamily: "var(--font-editorial), serif",
								color: "var(--editorial-dark-text)",
								fontSize: "1.25rem",
							}}
						>
							hello@lohmont.com
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
