"use client";

import { useState } from "react";

const FAQS = [
	{
		q: "How quickly can you go live?",
		a: "14 days from kickoff. We handle everything — scraping your inventory, training the AI on your vehicles and objection playbook, integrating with your CRM, and running QA. You don't touch a line of code.",
	},
	{
		q: "Does my team need to change how they work?",
		a: "No. The AI runs in the background, handling inbound calls and follow-ups. When a buyer is qualified and ready, the appointment lands in your CRM exactly where you'd expect it. Your team just shows up to close.",
	},
	{
		q: "What CRMs do you integrate with?",
		a: "We integrate with DealerSocket, VinSolutions, Reynolds & Reynolds, and most major platforms. If you're running something custom, we'll assess it in the intake call. Most setups are covered.",
	},
	{
		q: "What if the AI says something wrong to a customer?",
		a: "The AI is trained specifically on your inventory, pricing guidelines, and brand voice before it goes live. It doesn't improvise. If a question is outside its knowledge base, it tells the buyer a specialist will follow up — it never fabricates an answer.",
	},
	{
		q: "Is this just a chatbot?",
		a: "No. It's a voice-first AI that handles live phone conversations, not a widget that pops up on your website. It can also run outbound SMS and voice campaigns against your existing CRM contacts. Chatbots sit there and wait — this system goes and gets them.",
	},
	{
		q: "What happens if I want to cancel?",
		a: "Month-to-month after the initial 14-day build. Cancel with 30 days' notice and the infrastructure stays yours. We're not in the business of locking you into something that isn't working.",
	},
];

export function FAQ() {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section
			className="px-6"
			style={{
				paddingTop: "var(--spacing-5xl)",
				paddingBottom: "var(--spacing-5xl)",
			}}
		>
			<div className="max-w-3xl mx-auto">
				<div
					className="text-xs uppercase font-bold tracking-[0.2em] text-center"
					style={{
						color: "var(--editorial-accent)",
						marginBottom: "var(--spacing-md)",
					}}
				>
					FAQ
				</div>
				<h2
					className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-center text-balance"
					style={{
						fontFamily: "var(--font-editorial), serif",
						color: "var(--editorial-ink)",
						lineHeight: 1.22,
						marginBottom: "var(--spacing-4xl)",
					}}
				>
					Questions we get on every call.
				</h2>

				<div
					style={{
						border: "1px solid var(--editorial-hairline-strong)",
					}}
				>
					{FAQS.map(({ q, a }, idx) => {
						const isOpen = open === idx;
						return (
							<div
								key={q}
								style={{
									borderTop:
										idx === 0
											? "none"
											: "1px solid var(--editorial-hairline)",
								}}
							>
								<button
									type="button"
									className="w-full text-left flex items-start justify-between gap-4"
									style={{
										padding: "var(--spacing-xl)",
										background: "none",
										border: "none",
										cursor: "pointer",
									}}
									onClick={() => setOpen(isOpen ? null : idx)}
									aria-expanded={isOpen}
								>
									<span
										className="font-semibold"
										style={{
											color: "var(--editorial-ink)",
											fontSize: "1rem",
											lineHeight: 1.45,
										}}
									>
										{q}
									</span>
									<span
										aria-hidden
										style={{
											color: "var(--editorial-accent)",
											fontSize: "1.25rem",
											lineHeight: 1,
											flexShrink: 0,
											marginTop: "1px",
											transition: "transform 0.2s ease",
											display: "inline-block",
											transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
										}}
									>
										+
									</span>
								</button>
								{isOpen && (
									<div
										style={{
											padding:
												"0 var(--spacing-xl) var(--spacing-xl)",
										}}
									>
										<p
											style={{
												color: "var(--editorial-ink-muted)",
												fontSize: "1rem",
												lineHeight: 1.65,
												fontWeight: 500,
											}}
										>
											{a}
										</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
