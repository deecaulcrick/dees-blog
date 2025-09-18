import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getSnippetMetaData } from "@/lib/mdx";
import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";

const getPostContent = (slug: string) => {
    const folder = path.join(process.cwd(), "src/content/snippets/");
    const file = path.join(folder, `${slug}.mdx`);
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const snippets = getSnippetMetaData();
    return snippets.map((snippet) => ({ slug: snippet.slug }));
};

interface SinglePostProps {
    params: {
        slug: string;
    };
}


const singlePost = async (props: SinglePostProps) => {
    const { slug } = await props.params;
    const postContent = getPostContent(slug);

    return (
        <>

            <div className="container">
                <div>
                    <div className="mb-20">
                        <h1 className="h1 font-bold text-center">{postContent.data.title}</h1>
                        <p className="text-lg text-center">{postContent.data.description}</p>

                        <p className="mt-10 text-center"><i>Filed under </i><b>{postContent.data.category}</b> <i>on</i> <b>{postContent.data.date}</b></p>
                    </div>
                </div>
                <div className="flex flex-col items-center px-8 md:px-10 lg:px-20">
                    <div className="w-full md:w-[80%]">
                        <BlogPost content={postContent.content} />
                    </div>
                </div>
            </div>


        </>

    );
};

export default singlePost;