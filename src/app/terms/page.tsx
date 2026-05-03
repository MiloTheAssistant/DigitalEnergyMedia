import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Digital Energy Media.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#05070c] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-sm uppercase text-amber-300">Digital Energy Media</p>
        <h1 className="mt-4 text-4xl font-semibold">Terms of Service</h1>
        <div className="mt-8 grid gap-6 leading-8 text-slate-300">
          <p>
            This website provides general information about Digital Energy Media services. Submitting an inquiry does not
            create a client relationship, service agreement, or obligation to provide services.
          </p>
          <p>
            Service scope, pricing, timelines, deliverables, ownership, and payment terms are governed only by a separate
            written agreement signed by the appropriate parties.
          </p>
          <p>
            Digital Energy Media does not guarantee search rankings, revenue growth, platform availability, or specific
            marketing outcomes. Any strategy recommendations are based on the information available at the time of review.
          </p>
          <p>
            Digital Energy Media is a brand operated through Digital Energy Holdings, LLC. Questions may be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-cyan-200">
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-slate-500">Last updated: May 3, 2026.</p>
        </div>
      </article>
    </main>
  );
}
