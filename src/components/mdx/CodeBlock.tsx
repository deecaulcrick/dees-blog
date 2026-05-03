"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import { customDarkTheme } from "@/lib/customDarkTheme";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children?: React.ReactElement<{ className?: string; children?: string }>;
  filename?: string;
  [key: string]: unknown;
}

export function CodeBlock({ children, filename }: CodeBlockProps) {
  // const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const className = (children?.props?.className as string) ?? "";
  const language = className.replace("language-", "").trim() || "text";
  const code = String(children?.props?.children ?? "").trimEnd();

  const syntaxTheme = customDarkTheme;

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-6 border border-border text-xl w-full min-w-0">
      {filename && (<div className="flex items-center justify-between bg-background border-b border-border p-0">
        <div className="text-lg font-medium text-foreground py-3 px-6  h-12">
          {filename ?? " "}
        </div>
        <div className=" ">

          <button
            onClick={handleCopy}
            className="font-mono uppercase flex items-center gap-2 py-3 px-6  text-base bg-transparent h-12 hover:bg-foreground hover:text-background transition-colors border-l border-border text-foreground"
            aria-label={copied ? "Copied" : "Copy code"}
          > {copied ? "Copied" : "Copy"}
            {copied ? (
              <Check className="h-3.5 w-3.5 text-[var(--green)]" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>)}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={syntaxTheme as any}
          language={language}
          PreTag="div"
          customStyle={{ margin: 0, padding: "1rem", fontSize: "1.2rem", lineHeight: "1.6" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
