export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  outcomes: string[];
  process: Array<{ title: string; body: string }>;
  proofPoints: string[];
  bestFit: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "ai-visibility-audit",
    title: "AI Visibility Audit",
    eyebrow: "Visibility Audit",
    description:
      "A practical audit of your website, messaging, search footprint, content system, automation opportunities, and lead path.",
    intro:
      "The AI Visibility Audit maps where your business is findable, where trust breaks down, and where automation can remove friction. The result is a focused action plan instead of a generic marketing report.",
    outcomes: [
      "A clear map of current visibility gaps",
      "Search and content opportunities tied to buyer intent",
      "Lead capture and conversion path recommendations",
      "A prioritized 30-day implementation plan",
    ],
    process: [
      {
        title: "Inspect the footprint",
        body: "Review the website, search results, metadata, content, calls to action, and basic analytics signals.",
      },
      {
        title: "Map the friction",
        body: "Identify where prospects lose context, trust, momentum, or a clear next step.",
      },
      {
        title: "Prioritize the moves",
        body: "Separate immediate fixes from deeper systems work so the next investment is obvious.",
      },
    ],
    proofPoints: [
      "Built for small and mid-sized teams",
      "No vague dashboards without action",
      "Designed to feed web, content, and automation work",
    ],
    bestFit: [
      "Businesses with an existing site that underperforms",
      "Owners unsure what to fix first",
      "Teams preparing for a website or content rebuild",
    ],
  },
  {
    slug: "website-launch-sprint",
    title: "Website Launch Sprint",
    eyebrow: "Website Build",
    description:
      "A focused Vercel-first website sprint for businesses that need a fast, credible, search-ready digital home base.",
    intro:
      "The Website Launch Sprint creates a clean public foundation: clear positioning, fast pages, SEO metadata, lead capture, and a deployment setup that can grow with the business.",
    outcomes: [
      "Premium landing page or small site foundation",
      "Search-ready metadata, sitemap, and robots configuration",
      "Lead capture connected to Microsoft 365 or approved email delivery",
      "Vercel deployment and custom domain readiness",
    ],
    process: [
      {
        title: "Define the offer",
        body: "Clarify who the site serves, what they need to understand, and what action they should take.",
      },
      {
        title: "Build the presence",
        body: "Create the page structure, visual system, responsive layout, lead path, and technical SEO basics.",
      },
      {
        title: "Ship and verify",
        body: "Deploy to Vercel, verify routes and metadata, test the form, and prepare indexing steps.",
      },
    ],
    proofPoints: [
      "Next.js and Vercel-first implementation",
      "Built for launch speed without losing polish",
      "Designed for future service pages and content expansion",
    ],
    bestFit: [
      "New brands that need a credible first site",
      "Local businesses replacing outdated pages",
      "Operators who want a clean base before campaigns",
    ],
  },
  {
    slug: "ai-content-systems",
    title: "AI Content Systems",
    eyebrow: "Content Operations",
    description:
      "Reusable topic maps, prompt libraries, publishing workflows, and editorial systems for AI-assisted content production.",
    intro:
      "AI content only compounds when it has structure. This service turns scattered ideas into reusable content operations that keep voice, offers, topics, and publishing workflows aligned.",
    outcomes: [
      "Topic maps tied to services and buyer questions",
      "Reusable prompt libraries and brand voice rules",
      "Blog, email, and social templates",
      "A practical publishing cadence for lean teams",
    ],
    process: [
      {
        title: "Capture the source material",
        body: "Gather offers, audience notes, FAQs, existing content, service details, and proof points.",
      },
      {
        title: "Build the system",
        body: "Create reusable prompts, topic structures, templates, and review rules for consistent output.",
      },
      {
        title: "Publish with feedback",
        body: "Use performance and sales feedback to sharpen topics, angles, and future content decisions.",
      },
    ],
    proofPoints: [
      "Built for owners and lean teams",
      "Keeps AI output tied to actual business context",
      "Supports search, social, email, and sales enablement",
    ],
    bestFit: [
      "Teams that know they need content but lack structure",
      "Businesses with expertise stuck in conversations or documents",
      "Operators who want AI support without generic output",
    ],
  },
  {
    slug: "automation-workflows",
    title: "Automation Workflows",
    eyebrow: "Automation",
    description:
      "Practical workflow design for lead capture, follow-up, reporting, content operations, and AI-assisted business processes.",
    intro:
      "Automation should remove drag without hiding the business. This work identifies repeatable steps, clarifies ownership, and builds simple workflows that help the team respond faster and operate with less manual overhead.",
    outcomes: [
      "Lead intake and follow-up workflow recommendations",
      "Content and campaign process automation maps",
      "Reporting loops tied to real decisions",
      "AI-assisted operating patterns for repeatable work",
    ],
    process: [
      {
        title: "Map the repeatable work",
        body: "Identify where tasks, handoffs, follow-ups, and reporting repeat across the business.",
      },
      {
        title: "Design the workflow",
        body: "Separate what should be automated from what still needs human review and judgment.",
      },
      {
        title: "Measure and refine",
        body: "Track whether the workflow reduces response time, missed steps, and manual coordination.",
      },
    ],
    proofPoints: [
      "Pragmatic before complex",
      "Designed around business operations, not novelty",
      "Can connect with web, content, and reporting systems",
    ],
    bestFit: [
      "Businesses losing leads in manual follow-up",
      "Teams repeating the same content or admin tasks",
      "Operators preparing for AI-assisted workflows",
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
