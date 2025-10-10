import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

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
        <div className='mt-10 flex justify-between items-end border-t border-dashed border-zinc-400 dark:border-zinc-500 px-10 py-4 absolute ebottom-0 w-full'>
            <div className='flex gap-2'>
                <Link href="https://www.linkedin.com/in/deborah-caulcrick/" target="_blank" rel="noopener noreferrer" className='inline-block '>
                    <Linkedin strokeWidth={0} className='w-5 h-5 inline-block fill-zinc-900 dark:fill-zinc-300 hover:fill-theme-dark-pink dark:hover:fill-theme-dark-pink transition-colors' />
                </Link>
                <Link href="https://github.com/deecaulcrick" target="_blank" className='inline-block'>
                    <Github strokeWidth={0} className='w-5 h-5 inline-block fill-zinc-900 dark:fill-zinc-300 hover:fill-theme-dark-pink dark:hover:fill-theme-dark-pink transition-colors' />
                </Link>
            </div>
            <div className='font-mono text-gray-400 text-xs'>&copy; 2020 - {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer