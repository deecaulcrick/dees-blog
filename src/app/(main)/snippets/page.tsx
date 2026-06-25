import PostList from "@/components/PostList";
import {  getSnippetMetaData } from "@/lib/mdx";


export default function Home() {
  return (


    <div className="">
      <div className="w-full">
        <h2 className="border-t-40 border-theme-green font-heading font-bold text-6xl lg:text-9xl px-6 py-2 md:p-6 border-b border-b-foreground">snippets</h2>
        <div className=''>
          <PostList getMetaData={getSnippetMetaData} />
        </div>
        
      </div>
    </div>



  );
}
