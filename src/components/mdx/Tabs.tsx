"use client";

import React, { useState } from "react";

interface TabProps {
  children: React.ReactNode;
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

interface TabsProps {
  labels: string[];
  children: React.ReactNode;
}

export function Tabs({ labels, children }: TabsProps) {
  const [active, setActive] = useState(0);
  const panels = React.Children.toArray(children);

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden">
      <div className="flex border-b border-border bg-muted overflow-x-auto hide-scrollbar">
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-sm font-mono whitespace-nowrap transition-colors ${
              active === i
                ? "text-foreground border-b-2 border-[var(--blue)] -mb-px bg-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="bg-background">
        {panels[active]}
      </div>
    </div>
  );
}
