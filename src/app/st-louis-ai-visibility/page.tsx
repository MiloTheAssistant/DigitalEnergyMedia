import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Zap } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "St. Louis AI Visibility Services | Digital Energy Media",
  description:
    "AI visibility, website, content, and automation systems for small and mid-sized businesses in the Eureka and St. Louis region.",
  alternates: { canonical: `${siteConfig.url}/st-louis-ai-visibility` },
  openGraph: {
    title: "St. Louis AI Visibility Services | Digital Energy Media",
    description:
      "AI visibility, website, content, and automation systems for small and mid-sized businesses in the St. Louis region.",
    url: `${siteConfig.url}/st-louis-ai-visibility`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1792,
        height: 1024,
        alt: "Digital Energy Media AI visibility system",
      },
    ],
    type: "website",
  },
};

const signals = [
  "Local service businesses that need clearer discovery paths",
  "New brands preparing to launch in the region",
  "Operators with websites that do not convert enough traffic",
  "Teams exploring AI-assisted content and workflow systems",
];

const capabilities = [
  "Regional search and website visibility review",
  "Service-page structure and local proof-point planning",
  "AI-assisted content systems for lean teams",
  "Automation opportunities for lead follow-up and reporting",
];

export default function StLouisAiVisibilityPage() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <header className="border-b border-white/10 bg-[#05070c]/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-amber-300/60 bg-amber-300/10 text-amber-200">
              <Zap aria-hidden="true" size={19} />
            </span>
            <span className="text-base font-semibold">{siteConfig.name}</span>
          </Link>
          <Link href="/#contact" className="hidden h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:inline-flex">
            Start Audit
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <Image
          src={siteConfig.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070c_0%,rgba(5,7,12,0.95)_46%,rgba(5,7,12,0.72)_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 font-mono text-sm uppercase text-amber-300">
            <MapPin aria-hidden="true" size={16} />
            Eureka / St. Louis Region
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            AI visibility systems for St. Louis businesses ready to modernize how they get found.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Digital Energy Media helps small and mid-sized businesses in the St. Louis region build practical web,
            content, automation, and reporting systems that create clearer digital traction.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-base font-semibold text-slate-950 transition hover:bg-cyan-200">
              Request Regional Visibility Audit
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/services/ai-visibility-audit" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-base font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-100">
              View Audit Service
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">Regional Fit</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Local discovery now depends on more than a basic website.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Search results, service pages, review signals, content, lead capture, and follow-up workflows all shape
              whether a prospect understands the business and takes the next step.
            </p>
          </div>
          <div className="grid gap-4">
            {signals.map((signal) => (
              <div key={signal} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 aria-hidden="true" className="mb-4 text-cyan-200" size={22} />
                <p className="font-semibold leading-7">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070a10] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase text-amber-300">Capabilities</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {capabilities.map((capability) => (
              <article key={capability} className="rounded-lg border border-white/10 bg-slate-900 p-5">
                <h2 className="text-lg font-semibold leading-7">{capability}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">Start Here</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Map the regional visibility path.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Share the business, service area, and current digital footprint. We will identify practical next moves.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
