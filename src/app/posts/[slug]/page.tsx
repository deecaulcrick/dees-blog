import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import {getPostMetaData} from "@/lib/mdx";
import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";
import ShapeDivider from "@/components/ui/ShapeDivider";

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
    params: {
        slug: string;
    };
}


const singlePost = async (props: SinglePostProps) => {
    const { slug } = await props.params;
    const postContent = getPostContent(slug);

    return (
        <>
            {/* <div className=" header w-full">
      </div> */}
            <div className="w-full flex flex-col justify-center items-center">
                <div className="post-header h-auto w-full flex flex-col items-center">
                    <div className="container px-8 md:px-15 lg:px-30">
                        <Header />
                        <div className="w-[80%] mt-20">
                            <h1 className="h1">{postContent.data.title}</h1>
                            <p className="text-lg">{postContent.data.subheading}</p>

                            <p className="mt-10"><i>Filed under </i><b>{postContent.data.tag}</b> <i>on</i> <b>{postContent.data.date}</b></p>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-40 px-8 md:px-10 lg:px-20">
                        <div className="w-full md:w-[70%]">
                            <BlogPost content={postContent.content} />
                        </div>
                        <div>
                            Latest
                            <TableOfContents content={postContent.content} className="sticky top-20" />
                        </div>
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