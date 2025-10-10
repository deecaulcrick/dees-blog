import Link from 'next/link';

interface PostRefProps {
    title: string;
    link: string;
    description: string,
}

function PostRef({ title, link, description }: PostRefProps) {
    return (
        <div className='flex flex-col gap-4 my-8 p-6 md:p-10 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:shadow-sm cursor-pointer'>
            <div className=''>
                <Link href={link || '#'}>
                    <h3 className='font-heading tracking-tight text-3xl  hover:text-theme-dark-pink transition-colors'>{title}</h3>
                </Link>
            </div>
            <div className=''>
                <p className=' font-body'>{description}</p>
            </div>
        </div >
    )
}

export default PostRef