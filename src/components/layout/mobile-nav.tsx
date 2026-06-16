"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import type { NavigationLink } from "@/types/portfolio";

type MobileNavProps = {
  links: NavigationLink[];
  resumeHref: string;
};

export function MobileNav({ links, resumeHref }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface text-text transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
        {isOpen ? (
          <X aria-hidden="true" className="h-5 w-5" />
        ) : (
          <Menu aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-16 border-b border-border bg-background shadow-soft"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-content px-5 py-4">
            <div className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-text transition hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resumeHref}
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 py-3 text-base font-semibold text-text transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Resume
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
