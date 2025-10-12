'use client'
import NavLink from '@/components/ui/NavLink'
import React from 'react'


function layout({ children }: { children: React.ReactNode }) {


    return (
        <div>
            <div className="px-8 md:px-16 pt-16 flex justify-start ">
                <h2 className="font-heading text-left font-normal text-5xl tracking-tight mb-4">
                    Library
                </h2>

            </div>

            {children}
        </div>
    )
}

export default layout