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
								The average luxury dealership loses 3 to 5 serious buyers every weekend. Not to better cars. Not to better prices. To whoever picked up the phone first.
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
								The &ldquo;You Can&apos;t Lose&rdquo; Guarantee.
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
								Every inbound call, text, and web form gets a response
								within 60 seconds — 24/7, 365 days a year. If we ever miss
								that window, your next month is on us. Full stop.
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
									We take 100% of the risk. Every inbound lead — call,
									text, or web form — gets a response in under 60 seconds,
									24/7/365. Miss once and your next month is free. Period.
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
									The Midnight Million System.
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
									title="1. Relentless Revenue Receptionist"
									detail="A voice agent trained specifically on your inventory. It answers on the first ring, 24 hours a day. It sounds indistinguishable from a human — pre-qualifies the buyer, handles objections, and books the showroom appointment directly into your CRM."
								/>
								<DeliverableItem
									title="2. Dormant Deal Defibrillator"
									detail="You have thousands of cold leads sitting in your CRM collecting dust. That is free money. We deploy outbound AI voice and SMS that follows up with them systematically, wakes them up, qualifies them, and pulls them back in for a test drive."
								/>
								<DeliverableItem
									title="3. All-in AI Administrator"
									detail="Your best sales guys are wasting 30% of their day doing grunt work. CRM updates, loan application form-fills, deal stage routing — the AI handles all data entry, instantly. You get your team's time back so they can focus on closing deals and moving metal."
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
