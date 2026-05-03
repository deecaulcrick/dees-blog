interface VideoProps {
  src: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  fullBleed?: boolean;
}

export function Video({
  src,
  caption,
  autoPlay = true,
  loop = true,
  muted = true,
  fullBleed,
}: VideoProps) {
  return (
    <figure className={`my-8 ${fullBleed ? "-mx-[calc(50vw-50%)]" : ""}`}>
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full rounded-lg"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
