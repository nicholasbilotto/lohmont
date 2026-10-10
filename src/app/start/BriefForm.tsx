"use client";

import { useActionState } from "react";
import { sendBrief, type BriefState } from "./actions";
import { services, site } from "@/content/site";

const budgets = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Not sure yet"];

export function BriefForm({ preselect }: { preselect?: string }) {
  const [state, action, pending] = useActionState<BriefState, FormData>(sendBrief, { status: "idle" });

  if (state.status === "sent") {
    return (
      <div className="py-10">
        <p className="statement max-w-[22ch]">Received. We&apos;ll reply within a day.</p>
        <p className="body-lg muted mt-8">
          In the meantime, the studio is on Instagram at{" "}
          <a href={`https://instagram.com/${site.instagram}`} className="link-draw text-ink" target="_blank" rel="noreferrer">
            @{site.instagram}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-12">
      <div className="hidden" aria-hidden="true">
        <label>
          Company site
          <input type="text" name="company_site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset className="flex flex-col gap-4">
        <legend className="label faint mb-6">What do you need?</legend>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {services.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="needs"
                value={s.slug}
                defaultChecked={preselect === s.slug}
                className="peer sr-only"
              />
              <span className="h-4 w-4 border border-ink transition-colors peer-checked:bg-ink" aria-hidden="true" />
              <span className="body-lg">{s.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Business" name="business" autoComplete="organization" />
        <Field label="Instagram" name="instagram" placeholder="@" />
      </div>

      <fieldset>
        <legend className="label faint mb-6">Budget</legend>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {budgets.map((b) => (
            <label key={b} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="budget" value={b} className="peer sr-only" />
              <span className="h-4 w-4 rounded-full border border-ink transition-colors peer-checked:bg-ink" aria-hidden="true" />
              <span className="body-lg">{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-3">
        <span className="label faint">Anything else</span>
        <textarea
          name="note"
          rows={4}
          className="body-lg bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 resize-none"
        />
      </label>

      {state.status === "error" && (
        <p role="alert" className="body-lg">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="title w-fit link-draw disabled:opacity-40 text-left"
      >
        {pending ? "Sending…" : "Send the brief →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="label faint">
        {label}
        {required ? "" : <span className="ml-2 opacity-60">optional</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="body-lg bg-transparent border-b border-ink/30 focus:border-ink outline-none py-2 placeholder:text-ink/30"
      />
    </label>
  );
}
