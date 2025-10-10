import PostList from "@/components/PostList";
import MobileHero from "@/components/MobileHero";


export default function Home() {
  return (


    <div className="w-full">
      <MobileHero />
      <div className="py-10 flex flex-col md:flex-row sm:gap-10 md:gap-30">
        <div className="w-full">
          {/* <h2 className="font-heading text-theme-dark-pink font-medium text-2xl mb-10">Recent Articles</h2> */}
          <PostList />
        </div>

      </div>
    </div>


  );
}
