import { Resend } from "resend";
import { site } from "@/content/site";

export type Brief = {
  name: string;
  business: string;
  email: string;
  instagram: string;
  needs: string[];
  budget: string;
  note: string;
  at: string;
};

type Result = { ok: true; id?: string } | { ok: false; reason: string };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

/** Delivers a project brief to the studio inbox through Resend. */
export async function deliverBrief(brief: Brief): Promise<Result> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "RESEND_API_KEY is not set" };

  const to = process.env.BRIEF_TO ?? site.email;
  const from = process.env.BRIEF_FROM ?? "Lohmont <onboarding@resend.dev>";
  const subject = `New brief: ${brief.name}${brief.business ? `, ${brief.business}` : ""}`;

  const rows: [string, string][] = [
    ["Name", brief.name],
    ["Email", brief.email],
    ["Business", brief.business || "—"],
    ["Instagram", brief.instagram ? `@${brief.instagram}` : "—"],
    ["Needs", brief.needs.join(", ") || "—"],
    ["Budget", brief.budget || "—"],
    ["Note", brief.note || "—"],
    ["Sent", brief.at],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:14px;line-height:1.6;color:#121210;background:#f3f1ea;padding:32px">
<p style="margin:0 0 24px;font-size:11px;letter-spacing:.14em;text-transform:uppercase">New brief</p>
${rows
  .map(
    ([k, v]) =>
      `<p style="margin:0 0 14px"><span style="opacity:.55">${k}</span><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`
  )
  .join("")}
</div>`;

  const resend = new Resend(key);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: brief.email,
    subject,
    text,
    html,
  });

  if (error) return { ok: false, reason: `${error.name}: ${error.message}` };
  return { ok: true, id: data?.id };
}
