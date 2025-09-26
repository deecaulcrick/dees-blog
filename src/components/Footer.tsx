import React from 'react'
import MultiCloud from '@/components/shape-dividers/MultiCloud'
import LinkItem from './ui/LinkItem'

const categories = [
    {
        link: '/essays',
        linkText: 'Essays'
    },
    {
        link: '/productivity',
        linkText: 'Productivity'
    },
    {
        link: '/computer-science',
        linkText: 'Computer Science'
    },
    {
        link: '/web-development',
        linkText: 'Web Development '
    },
    {
        link: '/network-engineering',
        linkText: 'Network Engineering'
    },
]

const general = [
    {
        link: '/about',
        linkText: 'About Dee'
    },
    {
        link: '/about-blog',
        linkText: 'About The Blog'
    },
    {
        link: '/contact',
        linkText: 'Contact'
    },
]

const goodies = [
    {
        link: 'https://notion.so/@deecaulcrick',
        linkText: 'Notion Templates'
    },
    {
        link: '/palette-finder',
        linkText: 'Palette Finder'
    },

]

function Footer() {
    return (
        <div className="footer flex flex-col justify-center items-center">
            <MultiCloud />
            <div className="container grid gap-6 md:grid-cols-12 py-15 px-8 lg:px-20">
                <div className="col-span-5">
                    <h4 className=' font-bold text-xl'>Dee Caulcrick</h4>
                    <h5 className='font-medium mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h5>
                    {/* <p >Enter your email to get notified when I post new stuff.</p> */}
                </div>
                <div className=" grid col-span-7 grid-cols-12">
                    <div className=" hidden md:block col-span-6 md:col-span-4">
                        <h3 className='font-medium text-lg text-gray-700 dark:text-theme-green uppercase mb-4 text-right'>Categories</h3>
                        <div className='flex flex-col gap-1 items-end'>
                            {categories.map((item) => (
                                <LinkItem key={item.link} link={item.link} linkText={item.linkText} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-4">
                        <h3 className='font-medium text-lg text-gray-700 dark:text-theme-green uppercase mb-4 md:text-right'>Goodies</h3>
                        <div className='flex flex-col gap-1 md:items-end'>
                            {goodies.map((item) => (
                                <LinkItem key={item.link} link={item.link} linkText={item.linkText} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-4">
                        <h3 className='font-medium text-lg text-gray-700 dark:text-theme-green uppercase md:text-right mb-4'>General</h3>
                        <div className='flex flex-col gap-1 md:items-end'>
                            {general.map((item) => (
                                <LinkItem key={item.link} link={item.link} linkText={item.linkText} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer