import React from "react";

interface TooltipProps {
  tip: string;
  children: React.ReactNode;
}

export function Tooltip({ tip, children }: TooltipProps) {
  return (
    <span className="group relative inline-block">
      <span className="cursor-help underline decoration-dotted decoration-muted-foreground underline-offset-2">
        {children}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-64 rounded bg-muted px-2.5 py-1.5 text-xs text-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-100 z-50 shadow-lg border border-border"
      >
        {tip}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-muted" />
      </span>
    </span>
  );
}
