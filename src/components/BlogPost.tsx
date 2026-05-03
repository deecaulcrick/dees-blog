// Remove 'use client' - this should be a Server Component
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/mdx-components'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeFilename } from '@/lib/rehypeCodeFilename'

interface BlogPostProps {
  content: string;
}

async function BlogPost({ content }: BlogPostProps) {

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          rehypeSlug,
          rehypeCodeFilename,
        ],
      },
    },
  })

  return (
    <div className="blog-post prose prose-lg max-w-none">
      {mdxContent}
    </div>
  );
}

export default BlogPost;