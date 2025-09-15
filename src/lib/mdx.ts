import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getPostMetaData = () => {
    const folder = 'src/content/blog/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'))

    //Get gray-matter data from each file
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(path.join(folder, filename), 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            coverImage: matterResult.data.coverImage,
            slug: filename.replace('.md', ''),
        }
    })

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts
}

export default getPostMetaData