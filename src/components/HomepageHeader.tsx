import React from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'
import Image from 'next/image'
import Github from './icons/Github'

function HomepageHeader() {

    return (
        <div className='font-serif'>
            <div className='grid lg:grid-cols-12 gap-2 lg:gap-8 border-b border-border  lg:p-0 '>
                <div className='w-full lg:col-span-10 flex flex-col gap-4  lg:flex-row lg:items-end lg:justify-center lg:border-r '>
                    <div className=' font-black tracking-tight w-full lg:w-[75%] lg:border-r h-full flex items-center justify-start lg:pr-4'>
                        <Link href="/" className='w-full flex items-center lg:items-baseline lg:mb-6'>
                            <Image src="/images/logo/logo.svg" alt="Logo" width={300} height={100} className='w-full' />
                        </Link>
                    </div>
                    <div className=" lg:w-[25%] text-sm font-medium h-full flex lg:items-center lg:justify-center flex-col gap-2 lg:px-4">
                        <p className='lg:-mb-4'>
                        Exploring AI and the future of technology, one post at a time.
                        </p>
                    </div>
                </div>
                <div className=' flex lg:items-center lg:justify-end lg:col-span-2 text-sm lg:text-base font-medium mt-4 md:mt-0'>
                    <p className=' mb-4 lg:-mb-8'>
                    From <span className='font-extrabold underline'>deecaulcrick.com</span>
                    </p>
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

export default HomepageHeader