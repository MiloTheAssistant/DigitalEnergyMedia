import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FileSearch,
  Layers3,
  RadioTower,
  Sparkles,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { servicePages } from "@/content/service-pages";
import { siteCopy } from "@/content/site-copy";
import { siteConfig } from "@/lib/site-config";

const iconMap = [FileSearch, BrainCircuit, Cpu, Boxes, BarChart3];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-sm uppercase text-amber-300">
      {children}
    </p>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 text-base font-semibold text-slate-950 transition hover:bg-cyan-200"
          : "inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-base font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-100"
      }
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070c] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070c]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src={siteConfig.profileStampImage}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-amber-300/50 object-cover shadow-[0_0_22px_rgba(245,158,11,0.18)]"
            />
            <span className="text-base font-semibold">{siteConfig.name}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:inline-flex"
          >
            Start Audit
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-screen pt-16">
        <Image
          src={siteConfig.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070c_0%,rgba(5,7,12,0.92)_35%,rgba(5,7,12,0.45)_72%,rgba(5,7,12,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(0,229,255,0.18),transparent_32%),radial-gradient(circle_at_72%_76%,rgba(245,158,11,0.20),transparent_34%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-[22rem] min-w-0 sm:max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 font-mono text-sm text-cyan-100">
              <Sparkles aria-hidden="true" size={16} />
              {siteCopy.hero.eyebrow}
            </p>
            <h1 className="max-w-[11ch] text-4xl font-semibold leading-tight text-white sm:max-w-3xl sm:text-6xl sm:leading-none lg:text-7xl">
              {siteCopy.hero.headline}
            </h1>
            <p className="mt-6 max-w-[21rem] text-base leading-7 text-slate-200 sm:max-w-2xl sm:text-xl sm:leading-8">
              {siteCopy.hero.subheadline}
            </p>
            <p className="mt-5 max-w-[21rem] font-mono text-sm leading-6 text-amber-200 sm:max-w-full">{siteCopy.hero.support}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="#contact">{siteCopy.hero.primaryCta}</CtaLink>
              <CtaLink href="#framework" variant="secondary">
                {siteCopy.hero.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {siteCopy.signals.map((signal) => (
            <div key={signal} className="flex min-h-20 items-center border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-slate-200">
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#070a10] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Visibility Problem</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Most businesses do not have a visibility problem. They have a systems problem.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              A website alone is not enough. Random posts are not enough. Visibility comes from connected systems:
              clear messaging, searchable pages, useful media, lead capture, automation, and analytics that tell the truth.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {siteCopy.problems.map((problem) => (
              <article key={problem.title} className="rounded-lg border border-white/10 bg-slate-900/70 p-6">
                <CheckCircle2 aria-hidden="true" className="mb-5 text-amber-300" size={24} />
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Visibility Rails</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Digital Energy Media builds the operating layer for modern visibility.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We blend practical marketing, web deployment, AI-assisted production, automation thinking, and reporting
              so the business becomes easier to find, understand, contact, and trust.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {siteCopy.pillars.map((pillar, index) => {
              const Icon = iconMap[index] || RadioTower;
              return (
                <div key={pillar} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.04] p-5">
                  <Icon aria-hidden="true" className="mb-4 text-cyan-200" size={24} />
                  <h3 className="text-lg font-semibold">{pillar}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#070a10] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Services</SectionLabel>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Services built for practical digital momentum.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {siteCopy.services.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/10 bg-slate-900 p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-300">{service.body}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="framework" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Framework</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Map. Build. Publish. Measure. Compound.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Visibility becomes easier when the system is built in the right order.
              </p>
            </div>
            <div className="grid gap-4">
              {siteCopy.framework.map((item) => (
                <div key={item.step} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[5rem_1fr]">
                  <span className="font-mono text-2xl text-cyan-200">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-[#070a10] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Why It Works</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Not just creative. Not just technical. The bridge between both.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The goal is not to make noise. The goal is to make the business easier to find, understand,
              contact, automate, and improve.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {siteCopy.differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-slate-900/80 p-3 text-sm font-semibold text-slate-200">
                  <Layers3 aria-hidden="true" size={18} className="text-amber-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="about" className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.04] p-6 sm:p-8">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Image
                src={siteConfig.profileStampImage}
                alt="Digital Energy Media profile stamp"
                width={112}
                height={112}
                className="h-28 w-28 rounded-full border border-amber-300/40 object-cover shadow-[0_0_40px_rgba(245,158,11,0.18)]"
              />
              <div>
                <SectionLabel>Built For</SectionLabel>
                <h3 className="text-3xl font-semibold">Businesses that need the web to start working harder.</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-3">
              {siteCopy.useCases.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-md border border-white/10 bg-slate-950/80 p-4">
                  <span className="font-semibold">{item}</span>
                  <ArrowRight aria-hidden="true" size={18} className="text-cyan-200" />
                </div>
              ))}
            </div>
            <p className="mt-8 leading-7 text-slate-300">
              Digital Energy Media was created to help businesses turn scattered digital activity into organized
              visibility at the intersection of websites, content, brand assets, AI systems, automation, and reporting.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Start Here</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Ready to see where your visibility is leaking?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Start with a visibility audit. We will review your website, messaging, content, search presence,
              automation opportunities, and lead capture path, then map the next practical moves.
            </p>
            <div className="mt-8 grid gap-3 text-slate-200">
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-cyan-200">
                {siteConfig.email}
              </a>
              <a href="tel:+15735000064" className="transition hover:text-cyan-200">
                {siteConfig.phone}
              </a>
              <span>{siteConfig.location}</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05070c] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-slate-300 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <Image
                src={siteConfig.profileStampImage}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border border-amber-300/50 object-cover"
              />
              <span className="font-semibold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-lg leading-7">
              AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.
            </p>
            <p className="mt-4 text-slate-500">
              Digital Energy Media is a brand operated through Digital Energy Holdings, LLC.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <div className="mt-4 grid gap-2">
              {servicePages.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`} className="transition hover:text-white">
                  {service.title}
                </a>
              ))}
              <a href="/st-louis-ai-visibility" className="transition hover:text-white">
                St. Louis AI Visibility
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <div className="mt-4 grid gap-2">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
              <a href="/privacy" className="transition hover:text-white">Privacy</a>
              <a href="/terms" className="transition hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
