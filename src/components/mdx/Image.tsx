import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  fullBleed?: boolean;
}

export function Image({ src, alt, caption, fullBleed }: ImageProps) {
  return (
    <figure className={`my-8 ${fullBleed ? "-mx-[calc(50vw-50%)]" : ""}`}>
      <div className="relative w-full overflow-hidden rounded-lg">
        <NextImage
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
