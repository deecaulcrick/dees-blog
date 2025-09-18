import SnippetTable from "@/components/SnippetTable";
import Pill from "@/components/ui/Pill";
import IconArrowBullet from "@/components/icons/IconArrowBullet";


export default function Home() {
  return (


    <div className="container">
      <div className="px-8 md:px-15 lg:px-30">
        <div className="w-full">
          <h2 className="font-medium text-4xl mb-2">Snippets</h2>
          <p className="text-xl">Short solutions to discrete problems which can be copied and pasted.
          </p>
          <SnippetTable />
        </div>
      </div>
    </div>


  );
}
