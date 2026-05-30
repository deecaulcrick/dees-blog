import React from 'react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Shelf from '@/components/drawings/Shelf'

function page() {
    return (
        <div className=''>
            <div className="w-full">
                <h2 className="border-t-40 border-theme-green font-heading font-bold text-4xl lg:text-7xl  mb-4 px-6 py-4 md:p-6">about dee</h2>
            </div>
            <div className='border-t py-8'>
                <p className='text-xl font-serif italic'>writing an about page is so hard. i&apos;ll be back to this soon!</p>
            </div>

        </div >
    )
}

export default page