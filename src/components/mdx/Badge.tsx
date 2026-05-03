import React from "react";

type BadgeVariant = "default" | "info" | "warning" | "danger" | "success";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-muted text-foreground",
  info: "bg-[var(--blue)]/20 text-[var(--blue)]",
  warning: "bg-[var(--yellow)]/20 text-[var(--yellow)]",
  danger: "bg-destructive/20 text-destructive",
  success: "bg-[var(--green)]/20 text-[var(--green)]",
};

export function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium font-mono ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
