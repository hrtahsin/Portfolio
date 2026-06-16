import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-white shadow-sm hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border bg-surface text-text hover:border-accent hover:text-accent",
  ghost: "border-transparent text-text-muted hover:bg-surface-muted hover:text-text",
  dark: "border-text bg-text text-white shadow-sm hover:border-slate-700 hover:bg-slate-700",
};

type ButtonLinkProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold motion-safe:transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
