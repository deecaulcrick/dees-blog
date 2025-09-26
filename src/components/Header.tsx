import React from 'react'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import NavMenu from './NavMenu'
import SoundToggle from './ui/SoundToggle'
import MobileMenu from './MobileMenu'

function Header() {

    return (
        <div className='w-full py-12 grid grid-cols-12 gap-10 items-center'>
            <div className='col-span-6 md:col-span-3'>
                <h4 className=' font-bold text-xl'>Dee Caulcrick</h4>
            </div>
            <div className='md:col-span-6 gap-4 items-center hidden md:flex'>
                <NavMenu />
            </div>
            <div className=' col-span-6 md:col-span-3 flex gap-4 items-right justify-end'>
                <div><SoundToggle /></div>
                <div><DarkModeToggle /></div>
                <div className='md:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Header