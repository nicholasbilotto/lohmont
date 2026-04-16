import Image from "next/image";
import { IntegrationMarquee } from "./IntegrationMarquee";
import { ProofBlocks } from "./ProofBlocks";

const COST_OF_SILENCE_IMAGE_SRC =
	"https://tln9b3aheyjeg0bd.public.blob.vercel-storage.com/crash.png";

export function TrustSection() {
	return (
		<section
			className="px-6"
			style={{ paddingTop: 0, paddingBottom: "var(--spacing-5xl)" }}
		>
			<div className="max-w-6xl mx-auto">
				<IntegrationMarquee />
			</div>

			{/* Cost of silence: editorial split — image left, red block right */}
			<div
				className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
				style={{
					background: "var(--editorial-dark-bg)",
					paddingTop: "var(--spacing-4xl)",
					paddingBottom: "var(--spacing-4xl)",
				}}
			>
				<div className="max-w-6xl mx-auto px-6">
					{/* Split: image + red block */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0 mb-10">
						<div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] bg-black/20 overflow-hidden">
							{COST_OF_SILENCE_IMAGE_SRC ? (
								<Image
									src={COST_OF_SILENCE_IMAGE_SRC}
									alt=""
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							) : (
								<div
									className="w-full h-full bg-black/10"
									aria-hidden
								/>
							)}
						</div>
						<div
							className="flex flex-col justify-center px-8 py-10 lg:py-12"
							style={{
								background: "var(--editorial-accent)",
								color: "var(--editorial-ink)",
							}}
						>
							<h2
								className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4"
								style={{
									fontFamily: "var(--font-editorial), serif",
									lineHeight: 1.22,
									color: "var(--editorial-ink)",
								}}
							>
								One missed call = $40,000 lost. Year after year.
							</h2>
							<p
								className="text-base sm:text-lg"
								style={{
									lineHeight: 1.6,
									maxWidth: "32rem",
									color: "var(--editorial-ink)",
									fontWeight: 500,
								}}
							>
								Luxury buyers buy from whoever answers first. Miss the
								call... lose the deal. We plug the leak: AI that answers
								every lead, 24/7.
							</p>
						</div>
					</div>

					{/* Proof stats */}
					<div className="max-w-6xl mx-auto">
						<ProofBlocks dark />
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6">
				<div style={{ paddingTop: "var(--spacing-4xl)" }}>
					<div
						className="max-w-3xl mx-auto text-center"
						style={{ marginBottom: "var(--spacing-4xl)" }}
					>
						<div
							className="text-xs uppercase font-bold tracking-[0.2em]"
							style={{
								color: "var(--editorial-accent)",
								marginBottom: "var(--spacing-md)",
							}}
						>
							Done for you
						</div>
						<h2
							className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
							style={{
								fontFamily: "var(--font-editorial), serif",
								color: "var(--editorial-ink)",
								marginBottom: "var(--spacing-lg)",
								lineHeight: 1.22,
							}}
						>
							100% done-for-you. Zero friction. Zero headaches.
						</h2>
						<p
							style={{
								color: "var(--editorial-ink-muted)",
								fontSize: "1.125rem",
								lineHeight: 1.6,
								fontWeight: 500,
							}}
						>
							Your team doesn&apos;t lift a finger. We scrape your
							inventory, train the AI on your brochures, and launch fully
							autonomous.
						</p>
					</div>

					{/* Value Stack */}
					<div
						style={{
							border: "1px solid var(--editorial-hairline-strong)",
							background: "var(--editorial-paper)",
							marginBottom: "var(--spacing-4xl)",
						}}
					>
						<div
							style={{
								padding: "var(--spacing-xl)",
								borderBottom: "1px solid var(--editorial-hairline)",
							}}
						>
							<div
								className="text-xs uppercase font-bold tracking-[0.2em]"
								style={{
									color: "var(--editorial-accent)",
									marginBottom: "var(--spacing-sm)",
								}}
							>
								Everything included
							</div>
							<h3
								className="font-serif text-xl sm:text-2xl font-semibold tracking-tight"
								style={{
									fontFamily: "var(--font-editorial), serif",
									color: "var(--editorial-ink)",
									lineHeight: 1.22,
								}}
							>
								What $4,500/mo actually buys you.
							</h3>
						</div>
						<div style={{ padding: "var(--spacing-xl)" }}>
							{[
								{ label: "The 24/7 AI Closer", value: "$2,500/mo" },
								{ label: "The Dead Lead Cash Machine", value: "$1,500/mo" },
								{ label: "The Admin Eliminator", value: "$1,000/mo" },
							].map(({ label, value }) => (
								<div
									key={label}
									className="flex items-baseline justify-between"
									style={{
										paddingTop: "var(--spacing-md)",
										paddingBottom: "var(--spacing-md)",
										borderBottom: "1px solid var(--editorial-hairline)",
									}}
								>
									<span
										style={{
											color: "var(--editorial-ink)",
											fontWeight: 500,
											fontSize: "1rem",
										}}
									>
										{label}
									</span>
									<span
										style={{
											color: "var(--editorial-ink-muted)",
											fontWeight: 600,
											fontSize: "0.9375rem",
											whiteSpace: "nowrap",
											marginLeft: "var(--spacing-lg)",
										}}
									>
										{value}
									</span>
								</div>
							))}
							<div
								className="flex items-baseline justify-between"
								style={{ paddingTop: "var(--spacing-lg)" }}
							>
								<span
									style={{
										color: "var(--editorial-ink-muted)",
										fontSize: "0.875rem",
										fontWeight: 500,
										textTransform: "uppercase",
										letterSpacing: "0.1em",
									}}
								>
									Total value
								</span>
								<span
									style={{
										color: "var(--editorial-ink-muted)",
										fontWeight: 600,
										textDecoration: "line-through",
										fontSize: "1rem",
									}}
								>
									$5,000/mo
								</span>
							</div>
							<div
								className="flex items-baseline justify-between"
								style={{ paddingTop: "var(--spacing-sm)" }}
							>
								<span
									className="font-serif text-lg font-semibold"
									style={{
										fontFamily: "var(--font-editorial), serif",
										color: "var(--editorial-ink)",
									}}
								>
									Your investment
								</span>
								<span
									className="font-serif text-2xl font-bold"
									style={{
										fontFamily: "var(--font-editorial), serif",
										color: "var(--editorial-accent)",
									}}
								>
									$4,500/mo
								</span>
							</div>
						</div>
					</div>

					<div
						className="grid items-start lg:grid-cols-[1fr_1.5fr]"
						style={{ gap: "var(--spacing-4xl)" }}
					>
						<div>
							<div
								className="text-xs uppercase font-bold tracking-[0.2em]"
								style={{
									color: "var(--editorial-accent)",
									marginBottom: "var(--spacing-md)",
								}}
							>
								Guarantee
							</div>
							<h2
								className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight"
								style={{
									fontFamily: "var(--font-editorial), serif",
									color: "var(--editorial-ink)",
									marginBottom: "var(--spacing-lg)",
									lineHeight: 1.25,
								}}
							>
								The 60-Second Response Guarantee.
							</h2>
							<p
								style={{
									color: "var(--editorial-ink-muted)",
									fontSize: "1.125rem",
									lineHeight: 1.6,
									marginBottom: "var(--spacing-xl)",
									fontWeight: 500,
								}}
							>
								Every inbound lead gets a personal response in under 60
								seconds. Night, weekend, holiday — no exceptions.
							</p>
							<div
								style={{
									border: "2px solid var(--editorial-accent)",
									padding: "var(--spacing-lg)",
									background: "var(--editorial-paper)",
								}}
							>
								<h4
									className="uppercase font-bold text-xs tracking-[0.18em]"
									style={{
										color: "var(--editorial-accent)",
										marginBottom: "var(--spacing-sm)",
									}}
								>
									The Guarantee
								</h4>
								<p
									style={{
										color: "var(--editorial-ink)",
										fontSize: "1.125rem",
										lineHeight: 1.55,
										fontWeight: 500,
									}}
								>
									We take 100% of the risk. If our AI ever misses the
									60-second response window on an inbound lead, we credit
									that month&apos;s invoice in full. You keep the
									infrastructure either way.
								</p>
							</div>
						</div>

						<div
							style={{
								border: "1px solid var(--editorial-hairline-strong)",
								background: "var(--editorial-paper)",
							}}
						>
							<div style={{ padding: "var(--spacing-xl)" }}>
								<div
									className="text-xs uppercase font-bold tracking-[0.2em]"
									style={{
										color: "var(--editorial-accent)",
										marginBottom: "var(--spacing-sm)",
									}}
								>
									Deliverables
								</div>
								<h3
									className="font-serif text-xl font-semibold tracking-tight"
									style={{
										fontFamily: "var(--font-editorial), serif",
										color: "var(--editorial-ink)",
										marginBottom: "var(--spacing-xs)",
									}}
								>
									The 14-Day Dealership Engine.
								</h3>
								<p
									style={{
										color: "var(--editorial-ink-muted)",
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									Exactly what you get. No fluff. No surprises.
								</p>
							</div>
							<div
								style={{
									borderTop: "1px solid var(--editorial-hairline)",
								}}
							>
								<DeliverableItem
									title="1. The 24/7 AI Closer"
									detail="A voice agent that answers the phone on the first ring, every single time. It qualifies the buyer, handles objections, and books the appointment straight into your CRM. It doesn't sleep, take breaks, or ask for a raise."
								/>
								<DeliverableItem
									title="2. The 'Dead Lead' Cash Machine"
									detail="You have dead leads rotting in your CRM. That is free money. Our outbound AI uses SMS and voice to wake up your old prospects, reactivate them, and pull them back into the showroom."
								/>
								<DeliverableItem
									title="3. The Admin Eliminator"
									detail="Your top guys should be closing deals, not doing data entry. We automate the grunt work—loan applications, lead routing, and CRM updates. We buy your team back hundreds of hours so they can focus on selling metal."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function DeliverableItem({ title, detail }: { title: string; detail: string }) {
	return (
		<div
			style={{
				padding: "var(--spacing-xl)",
				borderTop: "1px solid var(--editorial-hairline)",
			}}
		>
			<div
				className="font-semibold tracking-tight"
				style={{
					color: "var(--editorial-ink)",
					marginBottom: "var(--spacing-xs)",
					fontSize: "0.9375rem",
				}}
			>
				{title}
			</div>
			<div
				style={{
					color: "var(--editorial-ink-muted)",
					fontSize: "1rem",
					lineHeight: 1.55,
					fontWeight: 500,
				}}
			>
				{detail}
			</div>
		</div>
	);
}
