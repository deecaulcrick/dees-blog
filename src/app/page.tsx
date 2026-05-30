import PostList from "@/components/PostList";
import Link from "next/link";
import Image from "next/image";
import HomepageHeader from "@/components/HomepageHeader";
import { HighlightedText } from "@/components/HighlightedText";


export default function Home() {
  return (


    <div className="max-w-7xl mx-auto w-full p-2 lg:p-6">
      <HomepageHeader />
      <div className="border-t-40 border-theme-green grid grid-cols-1 md:grid-cols-6 gap-12 items-center justify-between py-6 p-4 md:p-10 ">
        <div className="col-span-4 flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-none">A blog on building your own software, designing interfaces and exploring ml/ai</h1>


          <p className="text-base md:text-xl font-medium font-serif italic">

            I&apos;m currently a Research Engineer exploring cryptography, dynamic UI + playing with AI at a very cool research lab.
          </p>
        </div>
        <div className="w-full col-span-4 md:col-span-2 ">
          <Image src="/images/dee-head.png" alt="Hero Image" width={500} height={500} className="w-full" />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="flex items-center justify-between p-4 border-y">
          <h2 className="md:text-5xl font-semibold text-2xl lowercase">Recent Articles</h2>
          <Link href="/posts" className="text-sm md:text-lg tracking-tight font-mono hover:underline uppercase">
            View All Posts
          </Link>
        </div>

        <PostList />


      </div>
    </div>


  );
}
