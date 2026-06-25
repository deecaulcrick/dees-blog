import Image from "next/image";
import Link from "next/link";
import type { Book as BookData } from "@/lib/notion";

interface BookProps {
    book: BookData;
}

function Book({ book }: BookProps) {
    return (
        <div className="mb-10">
            <Image
                src={book.cover || "/placeholder.jpg"}
                alt={book.title}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg hover:scale-102 transition-transform duration-300 ease-in-out"
            />
            <h2 className="font-heading text-2xl tracking-tight mt-4">
                {book.url ? (
                    <Link href={book.url} target="_blank" rel="noopener noreferrer">
                        {book.title}
                    </Link>
                ) : (
                    book.title
                )}
            </h2>
            {book.author && <p>{book.author}</p>}
        </div>
    );
}

export default Book;
