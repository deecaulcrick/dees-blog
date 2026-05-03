import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  cover?: string;
  href?: string;
  year?: string;
  quote?: string;
}

function BookCardInner({
  title,
  author,
  cover,
  year,
  quote,
}: Omit<BookCardProps, "href">) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-dashed border-border p-4 transition-colors hover:border-[var(--blue)]/50">
      {cover && (
        <div className="shrink-0 w-24">
          <img src={cover} alt={title} className="w-full rounded shadow-sm" />
        </div>
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base lowercase">
            Book
          </span>
          {year && (
            <span className="text-base">· {year}</span>
          )}
        </div>
        <div className="font-sans font-bold text-foreground">{title}</div>
        <div className="text-lg font-medium text-foreground mt-0.5">{author}</div>
        {quote && (
          <p className="mt-2 text-lg italic text-foreground border-l-2 border-border pl-3">
            {quote}
          </p>
        )}
      </div>
    </div>
  );
}

export function BookCard({ href, ...rest }: BookCardProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="my-8 block no-underline"
      >
        <BookCardInner {...rest} />
      </a>
    );
  }
  return (
    <div className="my-6">
      <BookCardInner {...rest} />
    </div>
  );
}
