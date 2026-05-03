import Link from "next/link";
import Image from 'next/image';
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
        <div className="">
            {postMetaData.map((post) => {
                const config = CATEGORY_CONFIG[post.category] ?? DEFAULT_CONFIG
                const CategoryIcon = config.icon
                return (
                    <div key={post.slug} className="grid md:grid-cols-12 font-serif border-b border-border">
                        <div className="hidden md:col-span-3 md:flex flex-col  justify-center gap-4 md:border-r md:border-border p-12">
                            <p className="italic"><b><i>Last updated: </i></b>{post.date}</p>
                            <Image src={post.coverImage} alt={post.title} width={600} height={400} className=" mb-6 w-full" />
                        </div>
                        <div className="md:col-span-9 flex flex-col gap-6 p-4 py-12 md:p-20">

                            <h2 className="font-bold text-2xl md:text-4xl tracking-tight">
                                <Link href={`/posts/${post.slug}`} className="hover:underline hover:decoration-theme-pink">
                                    {post.title}
                                </Link>

                            </h2>


                            <p className="font-medium text-base md:text-lg">{truncateExcerpt(post.excerpt, 150)}</p>
                            <div className="md:hidden flex items-center gap-2 border w-fit p-2">

                                {/* <CategoryIcon size={20} /> */}

                                <p className="font-sans uppercase font-bold text-sm">{post.tag}</p>
                            </div>
                            <p className="md:hidden italic">Last updated: {" "}{post.date}</p>
                            <div className="hidden md:flex items-center gap-2 ">
                                <div className={`${config.bg} p-1 rounded-sm`}>
                                    <CategoryIcon className={config.iconColor} size={20} />
                                </div>

                                <p className="font-medium text-sm">{post.tag}</p>
                            </div>
                        </div>
                    </div>

                    // <Link href={`/posts/${post.slug}`} key={post.slug} className="bg-muted mb-6 border border-border rounded-3xl gap-12 ">
                    //     <Image src={post.coverImage} alt={post.title} width={600} height={400} className="rounded-t-3xl mb-6 w-full h-100 object-cover object-center" />
                    //     <div className=" p-8 md:p-10">

                    //         <div className="flex items-center gap-4 mb-4">
                    //             <div className={`${config.bg} p-1 rounded-sm`}>
                    //                 <CategoryIcon className={config.iconColor} size={20} />
                    //             </div>

                    //             <p className="font-bold text-sm">{post.tag}</p>
                    //         </div>
                    //         <h2 className=" font-bold text-4xl lowercase tracking-tight mb-4 ">

                    //             {post.title}

                    //         </h2>
                    //         {/* <p className=" text-zinc-500 font-mono uppercase text-xs">{post.date}</p> */}
                    //         <div className="md:col-span-6">
                    //             <p className="font-sans text-lg">{truncateExcerpt(post.excerpt, 100)}</p>

                    //         </div>
                    //     </div>


                    // </Link>

                )
            })}
        </div>
    );
}

export default PostList;