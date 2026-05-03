"use client";

import { Send } from "lucide-react";
import { useActionState, useRef } from "react";
import { submitLeadInquiry, type LeadFormState } from "@/app/actions";
import { budgetOptions, serviceOptions, timelineOptions } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const initialState: LeadFormState = { status: "idle" };

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-amber-200">{message}</p>;
}

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitLeadInquiry, initialState);
  const formStarted = useRef(false);

  function trackStart() {
    if (!formStarted.current) {
      formStarted.current = true;
      trackEvent("lead_form_start");
    }
  }

  return (
    <form
      action={formAction}
      onFocusCapture={trackStart}
      onSubmit={() => trackEvent("lead_form_submit_attempt")}
      className="grid gap-4"
    >
      {state.status === "error" ? (
        <div className="rounded-lg border border-amber-400/30 bg-amber-300/10 p-4 text-sm text-amber-100">
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-200">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          />
          <FieldError message={state.errors?.name} />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          Email
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          />
          <FieldError message={state.errors?.email} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-200">
          Company
          <input
            name="company"
            autoComplete="organization"
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          />
          <FieldError message={state.errors?.company} />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          Website
          <input
            name="website"
            type="text"
            inputMode="url"
            placeholder="https://"
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          />
          <FieldError message={state.errors?.website} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm text-slate-200">
          Service
          <select
            name="service"
            required
            defaultValue=""
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          >
            <option value="" disabled>
              Choose one
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <FieldError message={state.errors?.service} />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          Budget
          <select
            name="budget"
            defaultValue=""
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          >
            <option value="">Not sure yet</option>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <FieldError message={state.errors?.budget} />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          Timeline
          <select
            name="timeline"
            defaultValue=""
            className="h-12 rounded-md border border-white/10 bg-slate-950/80 px-4 text-base text-white outline-none transition focus:border-cyan-300"
          >
            <option value="">Exploring</option>
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <FieldError message={state.errors?.timeline} />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-slate-200">
        What should your digital presence start doing better?
        <textarea
          name="message"
          required
          rows={5}
          className="min-h-32 rounded-md border border-white/10 bg-slate-950/80 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300"
        />
        <FieldError message={state.errors?.message} />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {isPending ? "Sending..." : "Request Visibility Audit"}
        <Send aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
