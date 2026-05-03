"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  id: string;
}

export function YouTubeEmbed({ id }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className="my-6 relative aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          title="YouTube video"
        />
      </div>
    );
  }

  return (
    <div
      className="my-6 relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-black"
      onClick={() => setLoaded(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setLoaded(true)}
      aria-label="Play YouTube video"
    >
      <img
        src={thumbnail}
        alt="YouTube video thumbnail"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-150 hover:scale-110">
          <Play className="h-7 w-7 fill-white ml-1" />
        </span>
      </div>
    </div>
  );
}
