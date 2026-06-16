import { Github, Linkedin, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    label: "Email Hasan Rohan Tahsin",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Hasan Rohan Tahsin on GitHub",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "Hasan Rohan Tahsin on LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-text">Hasan Rohan Tahsin</p>
          <p className="mt-1 text-sm text-text-muted">
            © {year} · {siteConfig.location} · Built with Next.js for Vercel.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex items-center gap-2">
          {footerLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-background text-text-muted transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            );
          })}
        </nav>
      </Container>
    </footer>
  );
}
