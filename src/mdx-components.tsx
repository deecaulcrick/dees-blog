import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";

// Legacy UI components — kept for existing MDX content
import BlogImage from "@/components/ui/BlogImage";
import BookRef from "@/components/ui/BookRef";
import SideNote from "@/components/ui/SideNote";
import PostRef from "@/components/ui/PostRef";

import { Callout } from "@/components/mdx/Callout";
import { Blockquote } from "@/components/mdx/Blockquote";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { CodePreview } from "@/components/mdx/CodePreview";
import { CodeDiff } from "@/components/mdx/CodeDiff";
import { Terminal } from "@/components/mdx/Terminal";
import { Image } from "@/components/mdx/Image";
import { Video } from "@/components/mdx/Video";
import { IframeEmbed } from "@/components/mdx/IframeEmbed";
import { YouTubeEmbed } from "@/components/mdx/YouTubeEmbed";
import { TweetEmbed } from "@/components/mdx/TweetEmbed";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { Step } from "@/components/mdx/Step";
import { Accordion } from "@/components/mdx/Accordion";
import { Tabs, Tab } from "@/components/mdx/Tabs";
import { Badge } from "@/components/mdx/Badge";
import { Kbd } from "@/components/mdx/Kbd";
import { Tooltip } from "@/components/mdx/Tooltip";
import { Divider } from "@/components/mdx/Divider";
import { LinkCard } from "@/components/mdx/LinkCard";
import { PullQuote } from "@/components/mdx/PullQuote";
import { Footnote } from "@/components/mdx/Footnote";
import { BookCard } from "@/components/mdx/BookCard";

export const mdxComponents = {
    h1: ({ children, ...props }) => (
      <h1
        {...props}
        className="text-5xl font-black mb-6 mt-8 text-foreground border-b border-border pb-2"
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        {...props}
        className="font-sans font-semibold relative px-8 text-3xl md:text-5xl tracking-tight mb-4 mt-8 before:content-['#'] before:font-normal before:absolute before:-left-4 before:hidden hover:before:block before:transition-all"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="font-sans text-2xl px-8 font-black mb-3 mt-6 text-foreground"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-sans mb-4 px-8 leading-relaxed text-foreground text-xl">
        {children}
      </p>
    ),
    code: ({ children, className }) => {
      if (className?.includes("language-")) {
        return <code className={className}>{children}</code>;
      }
      return (
        <code className="bg-theme-blue/20 text-theme-blue px-1.5 py-0.5 rounded font-mono border border-border font-medium ">
          {children}
        </code>
      );
    },
    pre: (props) => <CodeBlock {...props} />,
    blockquote: ({ children, ...props }) => (
      <Blockquote {...props}>{children}</Blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-foreground leading-relaxed">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--yellow)] hover:bg-theme-green hover:text-black transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <NextImage
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-foreground">
        {children}
      </td>
    ),
    hr: () => <Divider />,

    // custom components
    Callout,
    Blockquote,
    CodeBlock,
    CodePreview,
    CodeDiff,
    Terminal,
    Image,
    Video,
    IframeEmbed,
    YouTubeEmbed,
    TweetEmbed,
    TableOfContents,
    Step,
    Accordion,
    Tabs,
    Tab,
    Badge,
    Kbd,
    Tooltip,
    Divider,
    LinkCard,
    PullQuote,
    Footnote,
    BookCard,

    // legacy — used by existing MDX content
    BlogImage,
    BookRef,
    SideNote,
    PostRef,

} as MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
