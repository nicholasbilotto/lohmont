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
									color: "var(--editorial-ink-muted)",
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
								The &quot;We Win When You Win&quot; Guarantee.
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
								We build your AI concierge and guarantee 15 qualified
								test-drive appointments for your high-ticket inventory.
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
									The Penalty
								</h4>
								<p
									style={{
										color: "var(--editorial-ink)",
										fontSize: "1.125rem",
										lineHeight: 1.55,
										fontWeight: 500,
									}}
								>
									We take 100% of the execution risk. If we don&apos;t
									generate 15 qualified test-drive appointments, you
									don&apos;t pay the second half. Period.
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
									The 14-Day Dealership Conversion Engine
								</h3>
								<p
									style={{
										color: "var(--editorial-ink-muted)",
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									What you get. No surprises.
								</p>
							</div>
							<div
								style={{
									borderTop: "1px solid var(--editorial-hairline)",
								}}
							>
								<DeliverableItem
									title="Inbound AI Receptionist & Ad Campaigns"
									detail="We launch targeted AI ad campaigns and plug in a 24/7 voice agent that answers every incoming call and web lead instantly. It qualifies buyers and books them directly into your CRM."
								/>
								<DeliverableItem
									title="The 'Dead Lead' Reactivation Engine"
									detail="Stop letting old leads rot. Our outbound AI SMS and voice infrastructure systematically reaches out to old prospects in your database to re-engage them and schedule showroom visits."
								/>
								<DeliverableItem
									title="Administrative & Form Automation"
									detail="Save your sales team hundreds of hours. We build automations that handle routine data entry, process loan application forms, and automatically update deal stages in your CRM."
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
