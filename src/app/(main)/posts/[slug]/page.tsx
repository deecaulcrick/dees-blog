import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getPostMetaData } from "@/lib/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { ArrowLeft } from "lucide-react";
import { relativeTime } from "@/utils/relativeTime";
import Image from "next/image";
import Link from 'next/link'


const getPostContent = (slug: string) => {
    const folder = path.join(process.cwd(), "src/content/blog/");
    const file = path.join(folder, `${slug}.mdx`);
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({ slug: post.slug }));
};



interface SinglePostProps {
    params: Promise<{
        slug: string;
    }>;
}



const singlePost = async (props: SinglePostProps) => {
    const { slug } = await props.params;
    const postContent = getPostContent(slug);

    return (
        <>
            <div>
                <Image src={postContent.data.coverImage} alt={postContent.data.title} width={1500} height={600} className="w-full h-75 object-cover" />
            </div>
            <div className="max-w-5xl mx-auto flex justify-center items-center">
                <div className="mt-12 px-6 ">

                    <div className="py-4 flex flex-col gap-6">
                        <Image src="/images/flower-posts.png" alt="Logo" width={321} height={471} className="w-30 -mt-40" />
                        {/* <div className="uppercase text-theme-blue font-bold text-base">Articles</div> */}
                        <div>
                            <Link href="/posts" className="group text-theme-blue font-bold text-base flex items-center gap-2">
                                <ArrowLeft className=" inline-block size-4 ml-2 " />
                                <p className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">Back to articles</p>
                            </Link>
                        </div>
                        <h1 className="mt-4 text-5xl md:text-7xl max-w-5xl font-bold tracking-tight">{postContent.data.title}</h1>

                        <p className="text-xl md:text-2xl leading-10 tracking-tight">{postContent.data.excerpt}</p>

                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border py-4">


                        <div className="flex items-center gap-2 text-theme-pink">


                            <p className="font-bold">{postContent.data.tag}</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-400">

                            <Image src="/images/leaf.png" alt="vine" width={462} height={443} className="w-6" />

                            <p className="font-bold text-sm">{relativeTime(postContent.data.date)}</p>
                        </div>
                    </div>
                    <div className=" mt-8 font-medium relative">
                        <TableOfContents />

                        <div className=" mt-12 min-w-0 font-sans tracking-tight">

                            <BlogPost content={postContent.content} />
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
};

export default singlePost;