import React from "react";

interface CodeDiffProps {
  lang?: string;
  children: React.ReactNode;
}

export function CodeDiff({ lang, children }: CodeDiffProps) {
  const lines = String(children).trim().split("\n");

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden font-mono text-sm">
      {lang && (
        <div className="flex items-center px-4 py-2 bg-muted border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{lang}</span>
        </div>
      )}
      <div className="bg-background overflow-x-auto">
        {lines.map((line, i) => {
          if (line.startsWith("+ ")) {
            return (
              <div key={i} className="flex bg-[var(--green)]/10">
                <span className="w-8 shrink-0 text-center select-none text-[var(--green)] py-0.5 border-r border-[var(--green)]/30">
                  +
                </span>
                <span className="px-4 py-0.5 text-foreground">{line.slice(2)}</span>
              </div>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <div key={i} className="flex bg-destructive/10">
                <span className="w-8 shrink-0 text-center select-none text-destructive py-0.5 border-r border-destructive/30">
                  -
                </span>
                <span className="px-4 py-0.5 text-foreground opacity-60 line-through">
                  {line.slice(2)}
                </span>
              </div>
            );
          }
          return (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 border-r border-border" />
              <span className="px-4 py-0.5 text-foreground">{line}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
