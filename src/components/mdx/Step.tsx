import React from "react";

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="my-6 flex gap-4">
      <div className="shrink-0 flex flex-col items-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blue)]/20 text-[var(--blue)] font-mono font-bold text-sm">
          {number}
        </span>
      </div>
      <div className="pt-0.5 min-w-0">
        <h4 className="font-sans font-bold text-foreground mb-2">{title}</h4>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
