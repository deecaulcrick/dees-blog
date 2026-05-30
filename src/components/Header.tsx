import React from 'react'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import NavMenu from './NavMenu'
import Logo from './logo/Logo'
import Image from 'next/image'
import SoundToggle from './ui/SoundToggle'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import Github from './icons/Github'

function Header() {

    return (
        <div className='font-serif'>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-8 justify-between p-4 pb-6 border-b border-border lg:items-end' >
                <div className='w-full flex flex-col lg:flex-row gap-4  lg:items-end '>
                    <Link href="/" className='w-fit flex items-center gap-2'>
                        <Image src="/images/logo/logo.svg" alt="Logo" width={500} height={200} className='w-full lg:w-[320px]' />
                    </Link>

                    <div className="md:mt-4  lg:mt-0 text-sm lg:text-base font-medium">
                        Exploring AI and the future of technology, one post at a time.
                    </div>
                </div>
                <div className='text-sm lg:text-base font-medium'>
                    From <span className='font-extrabold underline'>deecaulcrick.com</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center '>
                <div className='w-full border-b lg:border-none px-4 py-4'>
                    <NavMenu />
                </div>
                <div className='flex w-full'>
                    <div className='w-full px-4 py-4 flex items-center justify-center'>
                        <Github />
                    </div>
                    <div className='w-full px-4 py-4 border-l border-border flex items-center justify-center '>
                        <Github />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header