import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPostMetaData = () => {
    const folder = 'src/content/blog/';
    const files = fs.readdirSync(folder);
    // Change this to filter for .mdx files instead of .md
    const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

    //Get gray-matter data from each file
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(path.join(folder, filename), 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            subheading: matterResult.data.subheading,
            coverImage: matterResult.data.coverImage,
            tag: matterResult.data.tag,
            slug: filename.replace('.mdx', ''),
        }
    })

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts
}

export const getSnippetMetaData = () => {
    const folder = 'src/content/snippets/';
    const files = fs.readdirSync(folder);
    // Change this to filter for .mdx files instead of .md
    const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

    //Get gray-matter data from each file
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(path.join(folder, filename), 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            category: matterResult.data.category,
            slug: filename.replace('.mdx', ''),
        }
    })

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts
}