import Link from "next/link";
import Image from 'next/image';
import { relativeTime } from "@/utils/relativeTime";


export interface PostData {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tag?: string;
    category: string;
    slug: string;
}

interface PostListProps {
    getMetaData: () => PostData[];
    limit?: number;
    basePath?: string;
}

function PostList({ getMetaData, limit, basePath = "/posts" }: PostListProps) {
    const allPosts = getMetaData();
    const postMetaData = limit ? allPosts.slice(0, limit) : allPosts;

    const truncateExcerpt = (excerpt: string, maxLength: number) => {
        if (excerpt.length <= maxLength) {
            return excerpt;
        }
        return excerpt.slice(0, maxLength) + '...';
    };

    return (
        <div className="">
            {postMetaData.map((post) => {
                return (
                    <div key={post.slug} className="group bg-background/80 shadow-xs border border-border rounded-lg mb-6 break-inside-avoid hover:scale-102 transition-all duration-300 ease-in-out">
                        <div className="">
                            {post.coverImage && (
                                <Image src={post.coverImage} alt={post.title} width={600} height={400} className="rounded-t-lg mb-6 w-full" />
                            )}


                        </div>
                        <div className="p-4">

                            <h2 className="font-bold text-xl md:text-2xl tracking-tight">
                                <Link href={`${basePath}/${post.slug}`} className=" group-hover:text-theme-pink tracking-tight transition-colors duration-300 ease-in-out">
                                    {post.title}
                                </Link>

                            </h2>


                            <p className="font-normal text-base mt-4 tracking-tight">{truncateExcerpt(post.excerpt, 100)}</p>
                            <div className="flex items-center justify-between mt-4 text-sm text-neutral-700 dark:text-neutral-400">
                                <div>
                                    {post.tag && (
                                        <span className="inline-block">
                                            {post.tag}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {relativeTime(post.date)}
                                </div>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default PostList;
