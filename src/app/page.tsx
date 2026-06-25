import PostList from "@/components/PostList";
import Link from "next/link";
import Image from "next/image";
import { HighlightedText } from "@/components/HighlightedText";
import { getPostMetaData } from "@/lib/mdx";
import { getBooks } from "@/lib/notion";
import TitleLink from "@/components/ui/TitleLink";
import Book from "@/components/Book";

export const revalidate = 1800;

export default async function Home() {
  const books = await getBooks();
  const currentlyReading = books.filter((book) => book.status === "Reading").slice(0, 6);

  return (
    <div className="">
      <div>
        <Image
          src="/images/background.png"
          alt="Hero Image"
          width={1500}
          height={600}
          className="w-full h-75 object-cover"
        />
      </div>
     
      <div className=" max-w-5xl mx-auto pb-6 p-8 md:p-4  ">
        <div className=" flex flex-col gap-8">
          <Image src="/images/flower-can.png" alt="Logo" width={274} height={371} className="w-30 -mt-30" />
          <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">Dee writes about building your own software, designing interfaces and playing with AI</h1>


          <p className="text-lg md:text-xl ">
            Designer, developer, obsessive builder. <br />
            Currently exploring finance, payments & cryptography at Mainhedge.
          </p>
        </div>

      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2  max-w-5xl mx-auto p-8 md:p-4 pt-10 border-t border-border">
        <div className="border-b pt-6 pb-6 md:pb-0 md:border-b-0 md:border-r md:border-border md:pr-12">
          <TitleLink link="/posts" title="Articles" />
          <p className="mt-2 text-xl">Writing on various topics related to software development and design.</p>
          <div className="mt-6 ">
            <PostList getMetaData={getPostMetaData} limit={3} />
          </div>
        </div>
        <div className="pt-6 md:pl-12">
          <TitleLink link="/library" title="Reading" />
          <p className="mt-2 text-xl">Books I&apos;m reading and find interesting.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {currentlyReading.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
        {/* <div className="flex items-center justify-between p-4 border-y">
          <h2 className="md:text-5xl font-semibold text-2xl lowercase">Recent Articles</h2>
          <Link href="/posts" className="text-sm md:text-lg tracking-tight font-mono hover:underline uppercase">
            View All Posts
          </Link>
        </div>

        <PostList getMetaData={getPostMetaData} limit={3} /> */}


      </div>
    </div>


  );
}
