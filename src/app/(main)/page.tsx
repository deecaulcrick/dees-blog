import PostList from "@/components/PostList";
import MobileHero from "@/components/MobileHero";
import Link from "next/link";


export default function Home() {
  return (


    <div className="w-full">
      <MobileHero />
      <div className="p-10 flex flex-col sm:gap-10 md:gap-30">
        <div className="flex items-center justify-between">
          <h2 className="text-6xl font-bold text-2xl mb-10 lowercase">Recent Articles</h2>
          <Link href="/posts" className="text-xl font-medium lowercase hover:text-theme-purple">
            View All Posts
          </Link>
        </div>

        <PostList />


      </div>
    </div>


  );
}
