import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

// You can import custom components here
import CodeBlock from '@/components/ui/CodeBlock'
import Callout from '@/components/ui/Callout'
import BlogImage from './components/ui/BlogImage'
import BookRef from './components/ui/BookRef'
import SideNote from './components/ui/SideNote'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom headings with consistent styling
    h1: ({ children, ...props }) => (
      <h1 {...props} className="text-5xl font-bold mb-6 mt-8 text-foreground border-b pb-2">
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 {...props} className="relative px-4 text-4xl text-theme-teal dark:text-theme-pink font-semibold mb-4 mt-8 before:content-['#'] before:font-normal before:absolute before:-left-4 before:hidden hover:before:block before:transition-all">
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 {...props} className="text-2xl px-4 font-medium mb-3 mt-6 text-foreground">
        {children}
      </h3>
    ),

    // Custom paragraph styling
    p: ({ children }) => (
      <p className="mb-4 px-4 leading-relaxed text-foreground text-lg">
        {children}
      </p>
    ),

    // Custom code styling
    code: ({ children, className }) => {
      // If it has a className, it's a code block, otherwise inline code
      if (className?.includes('language-')) {
        return <CodeBlock className={className}>{children}</CodeBlock>
      }
      return (
        <code className="bg-theme-light-blue px-2 py-1 rounded font-mono text-smz border border-gray-300">
          {children}
        </code>
      )
    },

    // Pre tag for code blocks
    pre: ({ children }) => (
      <pre className="bg-theme-light-blue dark:bg-slate-900 pt-0 dark:border dark:border-gray-700 text-white rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),

    // Custom blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-6 my-6 italic text-lg bg-yellow/10 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),

    // Custom list styling
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="text-foreground leading-relaxed">
        {children}
      </li>
    ),

    // Custom link styling
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-orange hover:text-pink underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),

    // Custom image with Next.js Image component
    img: ({ src, alt }) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    ),

    // Custom table styling
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),

    th: ({ children }) => (
      <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2">
        {children}
      </td>
    ),

    // Custom components you can use in MDX
    Callout,
    CodeBlock,
    BlogImage,
    BookRef,
    SideNote,

    // You can add more custom components here
    ...components,
  }
}