import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Layers3, Zap } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { getServicePage, servicePages } from "@/content/service-pages";
import { siteConfig } from "@/lib/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: `${service.title} | Digital Energy Media`,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Digital Energy Media`,
      description: service.description,
      url,
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
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070c_0%,rgba(5,7,12,0.94)_45%,rgba(5,7,12,0.72)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">{service.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              {service.title}
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-200">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-base font-semibold text-slate-950 transition hover:bg-cyan-200">
                Request This Service
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/#services" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-base font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-100">
                View All Services
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">What It Does</p>
            <p className="mt-5 text-2xl leading-10 text-white">{service.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.04] p-5">
                <CheckCircle2 aria-hidden="true" className="mb-4 text-cyan-200" size={22} />
                <p className="font-semibold leading-7">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070a10] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase text-amber-300">Process</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-white/10 bg-slate-900 p-6">
                <span className="font-mono text-2xl text-cyan-200">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">Why It Fits</p>
            <div className="mt-6 grid gap-3">
              {service.proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <Layers3 aria-hidden="true" className="text-amber-300" size={18} />
                  <span className="font-semibold text-slate-100">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">Best For</p>
            <ul className="mt-6 grid gap-3">
              {service.bestFit.map((item) => (
                <li key={item} className="rounded-md border border-white/10 bg-slate-900/80 p-4 leading-7 text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#070a10] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase text-amber-300">Start Here</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Request a practical next-step audit.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Share where the business is now and what needs to improve. We will map the fastest useful path.
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
