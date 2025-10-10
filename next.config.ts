import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      new URL("https://i.pinimg.com/**"),
      new URL("https://images-na.ssl-images-amazon.com/**"),
    ]
  }
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

