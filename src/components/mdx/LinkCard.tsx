import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  favicon?: string;
}

export function LinkCard({ href, title, description, favicon }: LinkCardProps) {
  let hostname = href;
  try {
    hostname = new URL(href).hostname;
  } catch {
    // use raw href
  }

  const faviconUrl =
    favicon || `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex items-start gap-3 rounded-lg border border-border p-4 no-underline transition-colors duration-150 hover:border-[var(--blue)]/50 hover:bg-[var(--blue)]/5 group block"
    >
      <img
        src={faviconUrl}
        alt=""
        className="mt-0.5 h-5 w-5 rounded shrink-0"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="font-sans font-medium text-foreground group-hover:text-[var(--blue)] transition-colors truncate">
          {title}
        </div>
        {description && (
          <div className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
            {description}
          </div>
        )}
        <div className="text-xs text-muted-foreground mt-1 font-mono truncate">
          {hostname}
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
    </a>
  );
}
