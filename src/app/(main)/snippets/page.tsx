import SnippetTable from "@/components/SnippetTable";


export default function Home() {
  return (


    <div className="px-8 md:px-16 py-16">
      <div className="w-full">
        <h2 className="font-heading font-normal text-5xl tracking-tight mb-4">Snippets</h2>
        <p className="font-body text-lg">Short solutions to discrete problems which can be copied and pasted.
        </p>
        <SnippetTable />
      </div>
    </div>



  );
}
