import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 text-red-500">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3 text-blue-500">{children}</h2>,
  p: ({ children }) => <p className="mb-4 leading-relaxed text-green-600">{children}</p>,
  code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded font-mono">{children}</code>,
} satisfies MDXComponents


export default components