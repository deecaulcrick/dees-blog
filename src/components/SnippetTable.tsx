import Link from "next/link";
import { getSnippetMetaData } from "@/lib/mdx";

function SnippetTable() {
    const postMetaData = getSnippetMetaData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
            {postMetaData.map((post) => (
                <div key={post.slug} className="rounded-lg shadow-lg p-10 mb-6 border border-gray-100 dark:border-gray-800">
                    <h2 className="text-theme-pink font-medium text-2xl tracking-tighter mb-4 hover:underline hover:decoration-theme-pink">
                        <Link href={`/snippets/${post.slug}`} className="post-card-title">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="mb-6">{post.description}</p>
                    <Link href={`/snippets/${post.slug}`} className="font-bold">
                        Read more
                    </Link>
                    {/* <p className="post-date">{post.date}</p> */}
                </div>
            ))}
        </div>
    );
}

export default SnippetTable;