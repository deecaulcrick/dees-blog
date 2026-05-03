import React from 'react'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import NavMenu from './NavMenu'
import Image from 'next/image'
import SoundToggle from './ui/SoundToggle'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

function Header() {

    return (

        <div className='w-full container py-6 px-8 md:px-15 flex justify-between gap-10 items-center border border-dashed border-border bg-background fixed left-0 right-0 mx-auto z-99'>
            <div className='w-full md:col-span-6 gap-4 items-center justify-between hidden md:flex'>
                <Link href="/">
                    <Image src="/images/glasses-icon.svg" alt="Logo" width={100} height={100} />
                </Link>

                <NavMenu />

            </div>
            <div className='md:hidden flex flex-row-reverse gap-1 items-center'>

                <div><MobileMenu /></div>
                <div className='font-sans font-black text-xl border-r border-border pr-6 text-zinc-900 dark:text-zinc-300'>
                    <Link href="/">
                        <Image src="/images/glasses-icon.svg" alt="Logo" width={50} height={50} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header