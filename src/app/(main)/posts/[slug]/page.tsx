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
            {/* <div className=" header w-full">
      </div> */}


            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-8 md:px-16 py-16">
                    <div className="w-full md:w-[20%] static ">

                        <div className="hidden md:block sticky top-30">
                            <TableOfContents />
                        </div>
                    </div>
                    <div className="w-full md:w-[80%]">
                        {/* <div className="mb-4">
                            <Link href='/' className="flex items-center gap-3">
                                <MoveLeft strokeWidth={1} />
                                <p className="font-mono text-sm">
                                    BACK
                                </p>
                            </Link>
                        </div> */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-theme-blue p-1 rounded-sm">
                                <Calendar color="black" size={20} />
                            </div>

                            <p className="font-bold text-sm">{postContent.data.date}</p>
                        </div>


                        <h1 className="h1 lowercase font-sans font-bold tracking-tight">{postContent.data.title}</h1>
                        <p className="text-xl font-sans mb-6">{postContent.data.excerpt}</p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-theme-yellow p-1 rounded-sm">
                                <Tag color="black" size={20} />
                            </div>

                            <p className="font-bold text-sm">{postContent.data.tag}</p>
                        </div>
                        <Image src={postContent.data.coverImage} alt={postContent.data.title} caption={postContent.data.title} />

                        <BlogPost content={postContent.content} />
                    </div>

                </div>
            </div>


            {/* <div className="post-info relative">
                <div>
                    <p className="post-date">{postContent.data.date}</p>
                </div>


            </div> */}

        </>

    );
};

export default singlePost;