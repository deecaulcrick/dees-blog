import Link from "next/link";
import { getSnippetMetaData } from "@/lib/mdx";

function SnippetTable() {
    const postMetaData = getSnippetMetaData();

    return (
        <div className="mt-20">
            <div className="hidden md:block">
                <table>
                    <thead>
                        <tr className="font-mono text-sm uppercase border-b border-zinc-300 dark:border-zinc-800 mb-4">
                            <th className="text-left pb-4 font-normal">Title</th>
                            <th className="text-left pb-4 font-normal">Description</th>
                            <th className="text-left pb-4 font-normal">Category</th>
                        </tr>
                    </thead>
                    <tbody className="font-body">
                        {postMetaData.map((post) => (
                            <tr key={post.slug} className="border-t border-zinc-300 dark:border-zinc-800">
                                <td className="py-6 pr-4 ">
                                    <Link href={`/snippets/${post.slug}`} className="text-theme-dark-green dark:text-theme-dark-pink hover:underline hover:decoration-theme-teal font-normal">
                                        {post.title}
                                    </Link>
                                </td>
                                <td className="py-6">{post.description}</td>
                                <td className="py-6 text-zinc-600 dark:text-zinc-400 font-mono uppercase text-xs ">{post.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="md:hidden">
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
        </div>
    );
}

export default SnippetTable;