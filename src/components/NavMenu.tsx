import React from 'react'
import Link from "next/link"





const NavMenu = () => {
    return (
        <div>
            <nav className='flex gap-8 font-semibold text-sm lg:text-lg tracking-tight lowercase'>
                <Link href="/posts" className='hover:underline transition-colors duration-300'>
                    Articles
                </Link>
                <Link href="/about" className='hover:underline transition-colors duration-300'>
                    Links
                </Link>
                <Link href="/snippets" className='hover:underline transition-colors duration-300'>
                    Snippets
                </Link>
                <Link href="/about" className='hover:underline transition-colors duration-300'>
                    About
                </Link>
            </nav>
        </div>
    )
}


export default NavMenu