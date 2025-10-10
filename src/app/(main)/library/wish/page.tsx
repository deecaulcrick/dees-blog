import SnippetTable from "@/components/SnippetTable";
import Pill from "@/components/ui/Pill";
import IconArrowBullet from "@/components/icons/IconArrowBullet";


export default function Wish() {
    return (


        <div className="px-8 md:px-16 ">
            <div className="w-full">

                {/* Currently Reading */}
                {/* Reading List */}
                {/* Finished Reading */}
                <p className="font-body text-lg">Books I like the idea of having read.
                </p>
                <SnippetTable />
            </div>
        </div>



    );
}
