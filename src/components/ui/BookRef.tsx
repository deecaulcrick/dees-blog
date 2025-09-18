import Image from 'next/image';
import Link from 'next/link';

interface BookRefProps {
    src: string;
    title: string;
    author: string;
    link?: string;
    description: string,
}

function BookRef({ src, title, author, link, description }: BookRefProps) {
    return (
        <div className='flex items-center gap-12 my-8 p-12 border border-gray-300 dark:border-gray-700 rounded-lg'>
            <div className='w-[30%]'>
                <Link href={link || '#'} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={src}
                        alt={title}
                        width={128}
                        height={192}
                        className="w-full rounded-lg shadow-lg"
                    />
                </Link>
            </div>
            <div className='w-[70%]'>
                <h3 className='font-medium text-xl'>{title}</h3>
                <h4 className='font-medium text-lg text-gray-500 mb-8'>{author}</h4>
                <p className='text-sm'>{description}</p>
            </div>
        </div >
    )
}

export default BookRef