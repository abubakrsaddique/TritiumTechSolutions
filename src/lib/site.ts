export const siteConfig = {
  name: "Tritium Tech Solutions",
  shortName: "Tritium",
  tagline: "Software that glows.",
  description:
    "Tritium Tech Solutions is a software house building web apps, mobile apps, AI products and cloud platforms for ambitious startups and growing businesses.",
  url: "https://tritiumtech.example",
  email: "tritiumtechsolutions@gmail.com",
  location: "Remote-first, working worldwide",
  whatsapp: "923229837279" as string,
  whatsappMessage:
    "Hello Tritium Tech Solutions, I would like to discuss a project.",
  responseTime: "within 24 hours",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
