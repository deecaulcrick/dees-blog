import PostList from '@/components/PostList'
import { getPostMetaData } from '@/lib/mdx'
import Image from 'next/image'

function page() {
    return (
        <>
            <div>
                <Image src="/images/background.png" alt="header image" width={1500} height={600} className="w-full h-75 object-cover" />
            </div>
            <div className="max-w-6xl mx-auto p-6 md:p-0">
                <div className="mt-12 w-full">
                    <div className="flex">
                        <h2
                            className=" font-bold tracking-tight text-6xl lg:text-9xl ">Articles</h2>
                        <div className='text-theme-green  text-lg md:text-xl'>{getPostMetaData().length}</div>
                    </div>

                    <p className='mt-4 text-foreground text-xl'>A collection of articles on software development, interface design, and machine learning.</p>

                    <div className='mt-12 columns-1 md:columns-2 lg:columns-3 gap-6'>
                        <PostList getMetaData={getPostMetaData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page