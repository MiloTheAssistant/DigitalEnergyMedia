import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Visibility Request Received",
  description: "Thanks for contacting Digital Energy Media.",
};

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#05070c] px-4 py-20 text-white">
      <section className="w-full max-w-2xl rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto text-cyan-200" size={44} />
        <h1 className="mt-6 text-4xl font-semibold">Your visibility request has been received.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Thanks for reaching out. Digital Energy Media will review the details and follow up with the next practical
          step.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-cyan-300 px-5 font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
