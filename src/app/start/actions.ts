"use server";

import { deliverBrief } from "@/lib/email";
import { site } from "@/content/site";

export type BriefState = {
  status: "idle" | "sent" | "error";
  message?: string;
};

const BUDGETS = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Not sure yet"] as const;
const SERVICES = ["web", "app", "social"] as const;

export async function sendBrief(_prev: BriefState, form: FormData): Promise<BriefState> {
  // Honeypot: real people never fill this.
  if (String(form.get("company_site") ?? "").trim()) return { status: "sent" };

  const name = String(form.get("name") ?? "").trim();
  const business = String(form.get("business") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const instagram = String(form.get("instagram") ?? "").trim().replace(/^@/, "");
  const budget = String(form.get("budget") ?? "");
  const note = String(form.get("note") ?? "").trim();
  const needs = form.getAll("needs").map(String).filter((n) => (SERVICES as readonly string[]).includes(n));

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { status: "error", message: "A name and a working email are the only things we need." };
  }
  if (!needs.length) return { status: "error", message: "Pick at least one thing you need." };
  if (budget && !(BUDGETS as readonly string[]).includes(budget)) {
    return { status: "error", message: "That budget option isn't one of ours." };
  }

  const brief = { name, business, email, instagram, needs, budget, note, at: new Date().toISOString() };

  const result = await deliverBrief(brief);
  if (!result.ok) {
    // Keep the lead in the logs so nothing is lost if delivery is misconfigured.
    console.error("[brief] delivery failed:", result.reason, JSON.stringify(brief));
    return {
      status: "error",
      message: `We couldn't send that just now. Email us directly at ${site.email}.`,
    };
  }

  console.log("[brief] delivered", result.id ?? "");
  return { status: "sent" };
}
