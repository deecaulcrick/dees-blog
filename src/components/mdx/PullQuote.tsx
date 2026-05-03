import React from "react";

interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-12 px-6 md:px-12 py-2 text-center border-y border-border">
      <p className="font-serif text-2xl md:text-3xl font-medium italic leading-relaxed text-foreground before:content-['“'] before:text-[var(--blue)] after:content-['”'] after:text-[var(--blue)]">
        {children}
      </p>
    </blockquote>
  );
}
