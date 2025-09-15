import PostList from "@/components/PostList";


export default function Home() {
  return (
    <>
      <div className=" w-full h-20 z-1">
      </div>


      <div className="py-10 px-30 flex">
        <div className="w-[60%]">
          <h2 className="text-orange-600 font-bold">LATEST ARTICLES</h2>
          <PostList />
        </div>
        <div></div>

      </div>

    </>

  );
}
