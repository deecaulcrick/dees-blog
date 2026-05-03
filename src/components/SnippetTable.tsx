import Link from "next/link";
import { MoveRight } from "lucide-react";
import { getSnippetMetaData } from "@/lib/mdx";

function SnippetTable() {
    const postMetaData = getSnippetMetaData();

    return (
        <div className="mt-20">
            <div className="hidden lg:block">
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
            <div className="lg:hidden grid md:grid-cols-2 gap-6">
                {postMetaData.map((post) => (
                    <div key={post.slug} className="rounded-sm hover:shadow-sm p-10 mb-6 border border-zinc-200 dark:border-zinc-800">
                        <h2 className="font-heading font-light text-2xl tracking-tighter mb-4 hover:underline hover:decoration-theme-pink">
                            <Link href={`/snippets/${post.slug}`} className="post-card-title">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="font-body mb-6">{post.description}</p>
                        <Link href={`/snippets/${post.slug}`} className="font-bold">
                            <MoveRight strokeWidth={1} size={24} className="inline-block" />
                        </Link>
                        {/* <p className="post-date">{post.date}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SnippetTable;