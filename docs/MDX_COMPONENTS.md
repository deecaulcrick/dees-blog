# MDX Components — Next.js + Tailwind

## Stack
- Next.js App Router
- MDX via `next-mdx-remote` or Velite
- Tailwind CSS v4
- Shiki via `rehype-pretty-code` for syntax highlighting
- `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`

---

## File Structure

```
components/mdx/
  Callout.tsx
  Blockquote.tsx
  CodeBlock.tsx
  CodePreview.tsx
  CodeDiff.tsx
  Terminal.tsx
  Image.tsx
  Video.tsx
  IframeEmbed.tsx
  YouTubeEmbed.tsx
  TweetEmbed.tsx
  TableOfContents.tsx
  Step.tsx
  Accordion.tsx
  Tabs.tsx
  Badge.tsx
  Kbd.tsx
  Tooltip.tsx
  Divider.tsx
  LinkCard.tsx
  PullQuote.tsx
  Footnote.tsx
mdx-components.tsx
```

---

## Global MDX Map

`mdx-components.tsx` at root. Maps native HTML elements and registers all custom components so they're available in every `.mdx` file without imports.

```tsx
import { Callout } from './components/mdx/Callout'
// ... all other imports

export function useMDXComponents(components) {
  return {
    h1: ..., h2: ..., h3: ...,
    p: ..., ul: ..., ol: ..., li: ...,
    a: ...,
    pre: CodeBlock,
    blockquote: Blockquote,
    table: ..., th: ..., td: ...,
    hr: Divider,
    // custom
    Callout, CodePreview, CodeDiff, Terminal,
    Image, Video, IframeEmbed, YouTubeEmbed, TweetEmbed,
    TableOfContents, Step, Accordion, Tabs,
    Badge, Kbd, Tooltip, LinkCard, PullQuote, Footnote,
    ...components,
  }
}
```

---

## Components

---

### Callout
**Usage in MDX:**
```mdx
<Callout type="info" title="Worth knowing">
  Variable fonts cut HTTP requests dramatically.
</Callout>
```

**Props:**
- `type`: `"info" | "warning" | "tip" | "danger"` — controls icon + color
- `title`: optional string shown as label above body
- `children`: body content, supports inline MDX

**Behavior:**
- Renders an icon (use lucide-react: Info, AlertTriangle, Lightbulb, XCircle)
- Each type has a distinct background + border + text color via Tailwind
- No JS, pure presentational

---

### Blockquote
**Usage:** Native markdown `>` syntax, no import needed — mapped via `mdx-components.tsx`

**Props:** standard `blockquote` HTML props + optional `cite` string

**Behavior:**
- Styled with left border accent
- If `cite` prop present, renders a `<cite>` line beneath with an em dash prefix
- Serif font for quote text

---

### CodeBlock
**Usage:** Native fenced code blocks — mapped to `pre` in MDX map

````mdx
```tsx filename="components/Button.tsx"
export function Button({ children }) {
  return <button>{children}</button>
}
```
````

**Props (extracted from rehype-pretty-code meta):**
- `filename`: shown in header bar
- `language`: shown as badge
- copy button: always present, copies raw code to clipboard

**Behavior:**
- Shiki handles highlighting at build time — no client JS for highlight
- Copy button uses `navigator.clipboard.writeText`
- Shows filename tab if provided
- Line numbers optional via meta flag `showLineNumbers`

---

### CodePreview
**Usage:**
```mdx
<CodePreview>
  <CodePreview.Preview>
    <Button>Click me</Button>
  </CodePreview.Preview>
  <CodePreview.Code>
    ```tsx
    <Button>Click me</Button>
    ```
  </CodePreview.Code>
</CodePreview>
```

**Behavior:**
- Tabbed UI: "Preview" | "Code"
- Preview pane renders children in an isolated styled container
- Code pane renders the CodeBlock
- Tab state managed with `useState`

---

### CodeDiff
**Usage:**
```mdx
<CodeDiff lang="tsx">
- const x = 1
+ const x = useRef(1)
</CodeDiff>
```

**Behavior:**
- Lines prefixed with `-` get red background + minus gutter marker
- Lines prefixed with `+` get green background + plus gutter marker
- Neutral lines unstyled
- Shiki handles base highlighting, diff markers layered on top

---

### Terminal
**Usage:**
```mdx
<Terminal>
npm install rehype-pretty-code shiki
</Terminal>
```

**Props:**
- `title`: optional string for the window title bar (default: `"Terminal"`)

**Behavior:**
- Dark background always (ignore light/dark mode)
- Monospace font
- Optional fake traffic light dots in header
- Prompt character `$` prepended to each line

---

### Image
**Usage:**
```mdx
<Image src="/images/cover.png" alt="Description" caption="Optional caption" fullBleed />
```

**Props:**
- `src`, `alt`: required
- `caption`: optional string rendered beneath
- `fullBleed`: boolean — if true, breaks out of prose column to full width

**Behavior:**
- Wraps Next.js `<Image>` with proper sizing
- `fullBleed` uses negative margin trick to escape max-width container
- Caption in small muted text below

---

### Video
**Usage:**
```mdx
<Video src="/videos/demo.mp4" caption="Hover state demo" />
```

**Props:** `src`, `caption`, `autoPlay` (default true), `loop` (default true), `muted` (default true)

**Behavior:**
- Native `<video>` element, no third-party
- Same caption treatment as Image
- fullBleed support

---

### IframeEmbed
**Usage:**
```mdx
<IframeEmbed src="https://example.com" title="Example" height={400} />
```

**Props:** `src`, `title`, `height` (default 400)

**Behavior:**
- Renders URL in a styled browser-chrome wrapper (favicon, truncated URL, open link icon)
- `<iframe>` inside with `loading="lazy"`
- Rounded corners, border

---

### YouTubeEmbed
**Usage:**
```mdx
<YouTubeEmbed id="dQw4w9WgXcQ" />
```

**Props:** `id` — YouTube video ID only, not full URL

**Behavior:**
- Uses `lite-youtube-embed` or a simple facade pattern — loads thumbnail first, iframe only on click (performance)
- Aspect ratio 16:9, full width of prose column

---

### TweetEmbed
**Usage:**
```mdx
<TweetEmbed id="1234567890" />
```

**Props:** `id` — tweet/post ID

**Behavior:**
- Use `react-tweet` (static, no Twitter JS SDK)
- Respects light/dark mode

---

### TableOfContents
**Usage:**
```mdx
<TableOfContents />
```

**Behavior:**
- Auto-generated from `## h2` and `### h3` headings in the current file
- Headings must have IDs (via `rehype-slug`)
- Highlights active section on scroll using `IntersectionObserver`
- Smooth scroll on click

---

### Step
**Usage:**
```mdx
<Step number={1} title="Install dependencies">
  Run `npm install` in your project root.
</Step>
```

**Props:** `number`, `title`, `children`

**Behavior:**
- Large number rendered as accent-colored index
- Title beside it, body below
- Can be used standalone or in a sequence

---

### Accordion
**Usage:**
```mdx
<Accordion title="Why not use Prism?">
  Shiki runs at build time and produces better output.
</Accordion>
```

**Props:** `title`, `children`, `defaultOpen` (boolean, default false)

**Behavior:**
- Animated expand/collapse using CSS `grid-template-rows` transition
- Chevron icon rotates on open
- No library dependency

---

### Tabs
**Usage:**
```mdx
<Tabs labels={["npm", "pnpm", "yarn"]}>
  <Tab>npm install shiki</Tab>
  <Tab>pnpm add shiki</Tab>
  <Tab>yarn add shiki</Tab>
</Tabs>
```

**Props:** `labels` array on parent, children are `<Tab>` components

**Behavior:**
- `useState` for active tab index
- Underline indicator on active tab
- Each `<Tab>` child content can contain a CodeBlock

---

### Badge
**Usage:**
```mdx
<Badge>New</Badge>
<Badge variant="warning">Beta</Badge>
```

**Props:** `variant`: `"default" | "info" | "warning" | "danger" | "success"`

**Behavior:**
- Small pill, inline
- Color per variant via Tailwind

---

### Kbd
**Usage:**
```mdx
Press <Kbd>⌘</Kbd><Kbd>K</Kbd> to open search
```

**Behavior:**
- Styled like a physical key: border, slight shadow, monospace
- Inline element

---

### Tooltip
**Usage:**
```mdx
<Tooltip tip="This is the tooltip content">hover me</Tooltip>
```

**Props:** `tip` string, `children`

**Behavior:**
- CSS-only preferred (`:hover` + absolute positioning)
- Shows above trigger by default
- No JS, no library

---

### Divider
**Usage:** Native `---` markdown — mapped to `hr` in MDX map

**Behavior:**
- Styled horizontal rule, can include optional centered label text if used as `<Divider label="continued" />`

---

### LinkCard
**Usage:**
```mdx
<LinkCard href="https://shiki.style" title="Shiki" description="A beautiful syntax highlighter" />
```

**Props:** `href`, `title`, `description`, `favicon` (optional, auto-fetched if omitted)

**Behavior:**
- Unfurled link preview card
- Opens in new tab
- Hover state with border highlight

---

### PullQuote
**Usage:**
```mdx
<PullQuote>
  Typography is the invisible architecture of a page.
</PullQuote>
```

**Behavior:**
- Large serif text, centered or offset
- Decorative treatment — bigger than blockquote, no attribution
- Used for editorial emphasis mid-article

---

### Footnote
**Usage:**
```mdx
This is a claim that needs a source.<Footnote>Author, *Title*, 2024, p. 12.</Footnote>
```

**Behavior:**
- Renders a superscript number inline
- Corresponding note rendered at bottom of article
- Click scrolls to note; back-link returns to position
- Use `useId` for unique IDs per footnote

---
### BookCard component — add this to the spec:
```mdx
<BookCard
  title="The Elements of Typographic Style"
  author="Robert Bringhurst"
  cover="/books/bringhurst.jpg"
  href="https://bookshop.org/..."
  year="1992"
/>
```
Props: title, author, cover (optional), href (optional buy/info link), year, quote (optional pull quote from the book). Renders as a horizontal card — cover thumbnail on the left, title/author/year on the right, subtle border, muted "Book" label. If quote is passed, shows it beneath in italic.
---

## Notes for implementation

- All components should support dark mode via Tailwind `dark:` variants
- Tailwind v4 — use CSS variables for color tokens, not hardcoded palette classes
- Keep all components as server components where possible; use `"use client"` only where state/interaction is required (Accordion, Tabs, CodePreview, TableOfContents, Footnote)
- No animation libraries — CSS transitions only
- `rehype-pretty-code` config: use `nord` or `github-dark` theme for dark, `github-light` for lightv