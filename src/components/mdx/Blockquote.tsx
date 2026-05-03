import React from "react";

interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string;
}

export function Blockquote({ children, cite, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className="my-6 border-l-2 border-border pl-6 py-1"
      {...props}
    >
      <div className="font-serif text-foreground leading-10">
        <div className="text-7xl font-serif -mb-8"> “</div>
        {children}
      </div>
      {cite && (
        <cite className="mt-3 block text-sm text-muted-foreground not-italic">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}
