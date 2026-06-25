"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("h2[id], h3[id]")
    );

    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: Number(el.tagName[1]) as 2 | 3,
      }))
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className=" ">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 border-b border-border py-3 text-left"
      >
        <ChevronRight
          className={cn("size-4 shrink-0 text-theme-dark-pink transition-transform", open && "rotate-90")}
        />
        <span className="font-sans font-bold hover:text-theme-dark-pink">Table of Contents</span>
      </button>
      {open && (
        <ul className="font-sans space-y-1 border-b border-border py-3">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "pl-8" : "pl-4"}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveId(h.id);
                }}
                className={cn(
                  "block py-1.5 text-base transition-colors",
                  activeId === h.id
                    ? "text-[var(--blue)] font-medium"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
