import { ExternalLink } from "lucide-react";

interface IframeEmbedProps {
  src: string;
  title: string;
  height?: number;
}

export function IframeEmbed({ src, title, height = 400 }: IframeEmbedProps) {
  let hostname = src;
  let pathname = "";
  try {
    const url = new URL(src);
    hostname = url.hostname;
    pathname = url.pathname;
  } catch {
    // non-parseable URL — use raw string
  }

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden">
      <div className="flex items-center gap-2 bg-muted px-3 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground truncate flex-1 font-mono">
          {hostname}
          {pathname}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open in new tab"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        height={height}
        loading="lazy"
        className="w-full block"
      />
    </div>
  );
}
