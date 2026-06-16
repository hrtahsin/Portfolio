import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.08em]",
            isInverse ? "text-blue-200" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight tracking-normal sm:text-4xl",
          eyebrow ? "mt-3" : "mt-0",
          isInverse ? "text-white" : "text-text",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7", isInverse ? "text-white/75" : "text-text-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
