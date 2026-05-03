"use client";

import React, { useId, useState } from "react";

interface FootnoteProps {
  children: React.ReactNode;
}

export function Footnote({ children }: FootnoteProps) {
  const id = useId().replace(/:/g, "fn");
  const refId = `ref-${id}`;
  const noteId = `note-${id}`;
  const [open, setOpen] = useState(false);

  return (
    <>
      <sup id={refId}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[var(--blue)] hover:text-[var(--pink)] transition-colors underline decoration-dotted underline-offset-2 ml-0.5"
          aria-expanded={open}
          aria-controls={noteId}
          aria-label="Footnote"
        >
          [n]
        </button>
      </sup>
      {open && (
        <span
          id={noteId}
          role="note"
          className="block mt-2 ml-4 text-sm text-muted-foreground border-l-2 border-border pl-3 py-1"
        >
          {children}
          <button
            onClick={() => setOpen(false)}
            className="ml-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close footnote"
          >
            ↩
          </button>
        </span>
      )}
    </>
  );
}
