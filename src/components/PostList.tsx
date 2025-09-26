import Link from "next/link";
import { getPostMetaData } from "@/lib/mdx";

function PostList() {
    const postMetaData = getPostMetaData();

    return (
        <div className="post-grid">
            {postMetaData.map((post) => (
                <div key={post.slug} className="post-card mb-6">
                    <h2 className="font-bold text-2xl tracking-tighter mb-4 hover:underline hover:decoration-theme-pink">
                        <Link href={`/posts/${post.slug}`} className="post-card-title">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="mb-4 text-gray-400">{post.subheading}</p>
                    <p>{post.excerpt}</p>
                    <Link href={`/posts/${post.slug}`} className="font-bold">
                        Read more
                    </Link>
                    {/* <p className="post-date">{post.date}</p> */}
                </div>
            ))}
        </div>
    );
}

export default PostList;