import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Pill from "@/components/ui/Pill";
import IconArrowBullet from "@/components/icons/IconArrowBullet";


export default function Home() {
  return (


    <div className="container">
      <div className="py-10 px-8 md:px-15 lg:px-30 flex flex-col md:flex-row sm:gap-10 md:gap-30">
        <div className="w-full md:w-[60%]">
          <h2 className="text-theme-dark-pink font-medium text-lg mb-10">Articles and tutorials</h2>
          <PostList />
        </div>
        <div className="w-full md:w-[40%]">
          <h2 className="text-theme-dark-pink font-medium text-lg mb-10">Browse by category</h2>
          <div className="flex flex-wrap gap-2">
            <Pill>Computer Science</Pill>
            <Pill>Networking</Pill>
            <Pill>Notion</Pill>
            <Pill>Web Development</Pill>
          </div>
          <div>
            <h2 className="text-theme-dark-pink font-medium text-lg my-10">Notes</h2>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
