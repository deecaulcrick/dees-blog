import { ExternalLink } from "lucide-react";

interface TweetEmbedProps {
  id: string;
}

export function TweetEmbed({ id }: TweetEmbedProps) {
  const tweetUrl = `https://twitter.com/i/web/status/${id}`;

  return (
    <div className="my-6 rounded-lg border border-border p-4">
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-foreground hover:text-[var(--blue)] transition-colors no-underline"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current shrink-0"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="text-sm text-muted-foreground">View post on X</span>
        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
      </a>
    </div>
  );
}
