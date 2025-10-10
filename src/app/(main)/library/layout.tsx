'use client'
import Header from '@/components/Header'
import NavLink from '@/components/ui/NavLink'
import Link from 'next/link'
import React from 'react'


function layout({ children }: { children: React.ReactNode }) {


    return (
        <div>
            <div className="px-8 md:px-16 pt-16 flex justify-start ">
                <h2 className="font-heading text-left font-normal text-5xl tracking-tight mb-4 border-r border-zinc-500 pr-4 mr-4">
                    <NavLink href="/library">Reading</NavLink>
                </h2>
                <h2 className="font-heading font-normal text-5xl tracking-tight mb-4 ">  <NavLink href="/library/wish">Want to Read</NavLink>
                </h2>
            </div>

            {children}
        </div>
    )
}

export default layout