
import { getBooks } from "@/lib/notion";
import Image from "next/image";


export default async function Home() {
  const books = await getBooks();
  console.log(books);
  return (


    <div className="px-8 md:px-16 ">
      <div className="w-full">

        {/* Currently Reading */}
        {/* Reading List */}
        {/* Finished Reading */}
        <p className="font-body text-lg">Books on my shelf.
        </p>
        <div className=" mt-20">
          <h3 className="font-mono uppercase text-zinc-500 dark:text-zinc-300">Currently Reading</h3>
          <hr className="my-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {books.filter((book) => book.status === "Reading").map((book) => (
              <div key={book.id} className="mb-10">
                <Image src={book.cover ?? "/placeholder.jpg"} alt={book.title} width={100} height={150} className="w-full h-auto" />
                <h2 className="font-heading text-2xl tracking-tight mt-4 hover:underline hover:decoration-theme-pink">{book.title}</h2>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Books */}
        <div className=" mt-20">
          <h3 className="font-mono uppercase text-zinc-500 dark:text-zinc-300">All Books</h3>
          <hr className="my-6" />
          <div className="bg-white dark:bg-transparent border border-dashed px-4 py-4">
            <p className="font-mono uppercase text-zinc-500 dark:text-zinc-300 text-sm">I have read a lot of books. I am obviously only including books that I recommend.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {books.map((book) => (
              <div key={book.id} className="mb-10">
                <Image src={book.cover ?? "/placeholder.jpg"} alt={book.title} width={100} height={150} className="w-full h-auto" />
                <h2 className="font-heading text-2xl tracking-tight mt-4 hover:underline hover:decoration-theme-pink">{book.title}</h2>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



  );
}
