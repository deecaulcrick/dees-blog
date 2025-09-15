import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import getPostMetaData from "@/lib/mdx";
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
        <div className="post">
            <div className="bg-[#FCF5C5] h-120 relative">
                <h1 className="post-title font-bold text-3xl">{postContent.data.title}</h1>
                <div className="shape-divider">
                    <ShapeDivider />
                </div>
            </div>
            <div className="post-info relative">

                <div>
                    <p className="post-date">{postContent.data.date}</p>
                </div>

                <BlogPost content={postContent.content} />
            </div>
            <ShapeDivider />

            <div className="post-footer">
                <p>REPLY</p>
                <ul>
                    <li>
                        <a href="mailto:deecaulcrick@gmail.com" target="_blank">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/deecaulcrick" target="_blank">
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default singlePost;