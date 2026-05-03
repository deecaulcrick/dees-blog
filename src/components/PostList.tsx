import Link from "next/link";
import { getPostMetaData } from "@/lib/mdx";
import { Cpu, Feather, Network, Zap, Code2, LucideIcon } from 'lucide-react'

const CATEGORY_CONFIG: Record<string, { icon: LucideIcon; bg: string; iconColor: string }> = {
    "computer-science": { icon: Cpu, bg: "bg-theme-blue", iconColor: "text-black" },
    "essays": { icon: Feather, bg: "bg-theme-purple ", iconColor: "text-white" },
    "networking": { icon: Network, bg: "bg-theme-green ", iconColor: "text-black" },
    "productivity": { icon: Zap, bg: "bg-theme-yellow ", iconColor: "text-white " },
    "web-development": { icon: Code2, bg: "bg-theme-orange ", iconColor: "text-white " },
}

const DEFAULT_CONFIG = CATEGORY_CONFIG["web-development"]

function PostList() {
    const postMetaData = getPostMetaData();

    const truncateExcerpt = (excerpt: string, maxLength: number) => {
        if (excerpt.length <= maxLength) {
            return excerpt;
        }
        return excerpt.slice(0, maxLength) + '...';
    };

    return (
        <div className="grid grid-cols-2 gap-8">
            {postMetaData.map((post) => {
                const config = CATEGORY_CONFIG[post.category] ?? DEFAULT_CONFIG
                const CategoryIcon = config.icon
                return (

                    <Link href={`/posts/${post.slug}`} key={post.slug} className="bg-muted mb-6 border border-border rounded-3xl gap-12 p-8 md:p-10">

                        <div className="md:col-span-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`${config.bg} p-1 rounded-sm`}>
                                    <CategoryIcon className={config.iconColor} size={20} />
                                </div>

                                <p className="font-bold text-sm">{post.tag}</p>
                            </div>
                            <h2 className=" font-bold text-4xl lowercase tracking-tight mb-4 ">
                                <Link href={`/posts/${post.slug}`} className="post-card-title">
                                    {post.title}
                                </Link>
                            </h2>
                            {/* <p className=" text-zinc-500 font-mono uppercase text-xs">{post.date}</p> */}
                        </div>
                        <div className="md:col-span-6">
                            <p className="font-sans text-lg">{truncateExcerpt(post.excerpt, 100)}</p>

                        </div>

                    </Link>

                )
            })}
        </div>
    );
}

export default PostList;