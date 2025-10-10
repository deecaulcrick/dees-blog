import React from 'react'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

function SideBar() {
    return (
        <div className='hidden md:flex flex-col border-r border-dashed border-zinc-400 dark:border-zinc-500 px-10 h-screen w-[20%] p-20 justify-between'>
            <div>
                <h2 className='font-heading text-4xl tracking-tight leading-none'>Dee <br />Caulcrick</h2>
                <p className='font-body text-base mt-6'>A blog on computer science and web development.</p>
            </div>
            <div className='mt-10 flex justify-between items-end'>
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
        </div>
    )
}

export default SideBar