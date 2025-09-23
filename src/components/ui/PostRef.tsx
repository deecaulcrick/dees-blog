import Link from 'next/link';

interface PostRefProps {
    title: string;
    link: string;
    description: string,
}

function PostRef({ title, link, description }: PostRefProps) {
    return (
        <div className='flex flex-col gap-4 my-8 p-10 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg cursor-pointer'>
            <div className=''>
                <Link href={link || '#'}>
                    <h3 className='font-medium text-2xl text-theme-orange hover:underline'>{title}</h3>
                </Link>
            </div>
            <div className=''>
                <p className='text-sm'>{description}</p>
            </div>
        </div >
    )
}

export default PostRef