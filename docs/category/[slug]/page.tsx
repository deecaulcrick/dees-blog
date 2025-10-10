import Link from "next/link";
import { getPostMetaData } from "@/lib/mdx";


// type PostMeta = {
//     category: string;
//     slug: string;
//     title: string;
//     description: string;
// };


export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({ slug: post.slug }));
};

interface CategoryProps {
    params: {
        slug: string;
    };
}

function categoryPage(props: CategoryProps) {
    const { slug } = props.params;
    const posts = getPostMetaData().filter(post => post.category === slug);

    return (
        <div className="container">
            <div className="px-8 md:px-15 lg:px-30">
                <div className="w-full">
                    <h2 className="font-medium text-4xl mb-2">Snippets</h2>
                    <p className="text-xl">Short solutions to discrete problems which can be copied and pasted.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                        {posts.map((post) => (
                            <div key={post.slug} className="rounded-lg shadow-lg p-10 mb-6 border border-gray-100 dark:border-gray-800">
                                <h2 className="text-theme-pink font-medium text-2xl tracking-tighter mb-4 hover:underline hover:decoration-theme-pink">
                                    <Link href={`/posts/${post.slug}`} className="post-card-title">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="mb-6">{post.excerpt}</p>
                                <Link href={`/posts/${post.slug}`} className="font-bold">
                                    Read more
                                </Link>
                                {/* <p className="post-date">{post.date}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default categoryPage