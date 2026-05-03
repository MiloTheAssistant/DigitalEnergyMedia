import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Digital Energy Media.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05070c] px-4 py-20 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-sm uppercase text-amber-300">Digital Energy Media</p>
        <h1 className="mt-4 text-4xl font-semibold">Privacy Policy</h1>
        <div className="mt-8 grid gap-6 leading-8 text-slate-300">
          <p>
            Digital Energy Media collects the information you submit through contact and inquiry forms so we can respond
            to your request, evaluate fit, and provide relevant follow-up.
          </p>
          <p>
            We do not sell form submissions. We may use basic analytics to understand site performance, traffic sources,
            and conversion paths.
          </p>
          <p>
            Contact information submitted through this site may be delivered by email and handled by trusted service
            providers used to operate the website.
          </p>
          <p>
            To request access, correction, or deletion of submitted information, contact{" "}
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
