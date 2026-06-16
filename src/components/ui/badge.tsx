import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
