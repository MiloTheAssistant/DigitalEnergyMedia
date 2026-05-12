export const siteConfig = {
  name: "Digital Energy Media",
  shortName: "DE Media",
  url: "https://digitalenergymedia.com",
  email: "Contact@DigitalEnergyMedia.Com",
  phone: "(573) 500-0064",
  location: "Eureka, MO / St. Louis Region",
  description:
    "Digital Energy Media builds AI-powered visibility systems for businesses ready to be found, trusted, automated, and moving.",
  heroImage: "/brand/digital-energy-media-hero.png",
  profileStampImage: "/brand/website/profile-stamp.png",
  ogImage: "/brand/og-image.png",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Framework", href: "#framework" },
    { label: "Work", href: "#use-cases" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const serviceOptions = [
  "Visibility Audit",
  "Website Launch Sprint",
  "AI Content System",
  "Brand Asset System",
  "Monthly Media Operations",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "Now / urgent",
  "Next 30 days",
  "Next 60-90 days",
  "Exploring options",
] as const;
