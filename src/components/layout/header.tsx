import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { navigationLinks } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="rounded-md text-lg font-semibold text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Hasan Rohan Tahsin
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition hover:bg-surface-muted hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Resume
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>

        <MobileNav links={navigationLinks} resumeHref={siteConfig.resumePath} />
      </Container>
    </header>
  );
}
