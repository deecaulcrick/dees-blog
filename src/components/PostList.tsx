import Link from "next/link";
import { getPostMetaData } from "@/lib/mdx";
import { MoveRight } from 'lucide-react'

function PostList() {
    const postMetaData = getPostMetaData();

    return (
        <div className="post-grid">
            {postMetaData.map((post) => (
                <div key={post.slug} className="post-card mb-6 grid md:grid-cols-12 border-b border-zinc-200 dark:border-zinc-800 py-6 gap-12 px-8 md:px-15">
                    <div className="md:col-span-4">
                        <h2 className="font-heading font-medium text-2xl tracking-tighter mb-4 hover:underline hover:decoration-theme-pink">
                            <Link href={`/posts/${post.slug}`} className="post-card-title">
                                {post.title}
                            </Link>
                        </h2>
                        <p className=" text-zinc-500 font-mono uppercase text-xs">{post.date}</p>
                    </div>
                    <div className="md:col-span-6">
                        <p className="font-body">{post.excerpt}</p>

                    </div>
                    <div className="md:col-span-2 flex md:justify-center items-center">
                        <Link href={`/posts/${post.slug}`} className="font-bold">
                            <MoveRight strokeWidth={1} size={24} className="inline-block" />
                        </Link>
                    </div>

                    {/* <p className="post-date">{post.date}</p> */}
                </div>
            ))}
        </div>
    );
}

export default PostList;