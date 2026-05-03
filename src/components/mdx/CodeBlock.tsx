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
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      {filename && (<div className="flex items-center justify-between p-3 px-6 bg-muted border-b border-border">
        <span className="text-xl font-medium text-foreground">
          {filename ?? " "}
        </span>
        <div className="flex items-center gap-2">
          {/* {language !== "text" && (
            <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-0.5 rounded border border-border">
              {language}
            </span>
          )} */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 p-2 text-foreground rounded border border-border"
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-[var(--green)]" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )} {copied ? "Copied" : "Copy code"}
          </button>
        </div>
      </div>)}
      <SyntaxHighlighter
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={syntaxTheme as any}
        language={language}
        PreTag="div"
        customStyle={{ margin: 0, padding: "1rem", fontSize: "0.875rem", lineHeight: "1.6" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
