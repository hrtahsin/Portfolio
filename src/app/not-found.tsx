import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main id="main-content">
      <Container className="py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-text sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
          The page may have moved or the link may be incomplete.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-white motion-safe:transition hover:border-accent-hover hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Back home
        </Link>
      </Container>
    </main>
  );
}
