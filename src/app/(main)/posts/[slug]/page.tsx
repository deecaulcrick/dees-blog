import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getPostMetaData } from "@/lib/mdx";
import TableOfContents from "@/components/TableOfContents";
import { MoveLeft } from "lucide-react";
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
                    <div className="w-full md:w-[80%]">
                        <div className="mb-4">
                            <Link href='/' className="flex items-center gap-3">
                                <MoveLeft strokeWidth={1} />
                                <p className="font-mono text-sm">
                                    BACK
                                </p>
                            </Link>
                        </div>
                        <p className="mb-4 font-mono text-xs"><i>Filed under </i><b>{postContent.data.tag}</b> <i>on</i> <b>{postContent.data.date}</b></p>

                        <h1 className="h1 font-heading font-normal tracking-tight">{postContent.data.title}</h1>
                        <p className="text-sm font-mono ">{postContent.data.subheading}</p>

                        <hr className="my-12" />
                        <BlogPost content={postContent.content} />
                    </div>
                    <div className="w-full md:w-[20%] static flex items-end ">
                        <TableOfContents content={postContent.content} className=" hidden md:block sticky bottom-16 right-0" />
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