import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getPostMetaData } from "@/lib/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { Calendar, Tag } from "lucide-react";
import { Image } from "@/components/mdx/Image"
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
            <div className="w-full flex justify-center items-center">
                <div >
                    <div className="border-t-30 border-theme-green px-4 md:px-6 py-4 flex flex-col gap-6">

                        <h1 className="mt-4 text-5xl md:text-7xl max-w-5xl font-sans font-bold">{postContent.data.title}</h1>

                    </div>
                    <div className="flex gap-4 items-center border-y px-6 py-6">

                        <div className="flex items-center gap-2 ">
                            <Calendar size={16} />

                            <p className="font-medium text-sm">{postContent.data.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag size={16} />

                            <p className="font-medium text-sm">{postContent.data.tag}</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-12  md:gap-20 px-2 md:px-6 py-10 font-serif font-medium relative">
                        <div className="md:col-span-3 sticky top-30">

                            <div className="hidden md:block sticky top-30">
                                <TableOfContents />
                            </div>
                        </div>
                        <div className="md:col-span-9 min-w-0">
                        
                            <BlogPost content={postContent.content} />
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
};

export default singlePost;