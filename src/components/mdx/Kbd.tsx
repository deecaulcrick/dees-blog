import React from "react";

interface KbdProps {
  children: React.ReactNode;
}

export function Kbd({ children }: KbdProps) {
  return (
    <kbd className="inline-flex items-center px-1.5 py-0.5 font-mono text-xs font-medium rounded border border-border bg-muted text-foreground shadow-[0_1px_0_0_var(--border)]">
      {children}
    </kbd>
  );
}
