import React from "react";

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

function getTextContent(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (React.isValidElement(node)) return getTextContent((node.props as { children?: React.ReactNode }).children);
  return "";
}

export function Terminal({ title = "Terminal", children }: TerminalProps) {
  const lines = getTextContent(children).trim().split("\n");


  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border">
      <div className="flex items-center gap-2 bg-muted px-4 py-2.5 border-b border-border">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
        {/* <span className="ml-2 text-xs text-white/40 font-mono">{title}</span> */}
      </div>
      <div className="bg-background px-4 py-4 space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-[var(--green)] font-mono text-sm select-none">$</span>
            <span className="font-mono text-sm text-[#d4d4d4]">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
