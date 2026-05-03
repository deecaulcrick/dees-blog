"use client";

import React, { useState } from "react";

interface CodePreviewProps {
  children: React.ReactNode;
}

function Preview({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Code({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function CodePreview({ children }: CodePreviewProps) {
  const [active, setActive] = useState<"preview" | "code">("preview");

  const tabs = React.Children.toArray(children);
  const previewChild = tabs.find(
    (c) => React.isValidElement(c) && c.type === Preview
  );
  const codeChild = tabs.find(
    (c) => React.isValidElement(c) && c.type === Code
  );

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden">
      <div className="flex border-b border-border bg-muted">
        {(["preview", "code"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm font-mono capitalize transition-colors ${
              active === tab
                ? "text-foreground border-b-2 border-[var(--blue)] -mb-px bg-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {active === "preview" && (
          <div className="p-6 bg-background">{previewChild}</div>
        )}
        {active === "code" && <div>{codeChild}</div>}
      </div>
    </div>
  );
}

CodePreview.Preview = Preview;
CodePreview.Code = Code;
