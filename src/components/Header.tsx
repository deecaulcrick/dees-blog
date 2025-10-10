import React from 'react'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import NavMenu from './NavMenu'
import SoundToggle from './ui/SoundToggle'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

function Header() {

    return (
        <div className='w-full py-6 px-8 md:px-15 flex justify-between gap-10 items-center border-b border-dashed border-zinc-400 dark:border-zinc-500 z-50'>
            <div className='md:col-span-6 gap-4 items-center hidden md:flex'>
                <NavMenu />

            </div>
            <div className='md:hidden flex flex-row-reverse gap-1 items-center'>

                <div><MobileMenu /></div>
                <div className='font-heading text-xl border-r border-zinc-400 dark:border-zinc-500 pr-6 text-zinc-900 dark:text-zinc-300'>
                    <Link href="/">DC</Link>
                </div>
            </div>
            <div className=' col-span-6 md:col-span-3 flex gap-4 items-right justify-end'>
                <div><SoundToggle /></div>
                <div><DarkModeToggle /></div>
            </div>
        </div>
    )
}

export default Header