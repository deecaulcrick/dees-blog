import React from 'react'
import Image from 'next/image'
import Timeline from '@/components/Timeline'

// TODO: replace with your real work history
const timelineItems = [
    {
        role: 'Research Engineer',
        company: 'Mainhedge Research',
        dateRange: 'May 2026 - PRESENT',
        description: 'Placeholder description of what you did in this role and why it mattered.',
    },
    {
        role: 'Head of Product',
        company: 'Savvy Bee',
        dateRange: 'September 2025 - April 2026',
        description: 'Placeholder description of what you did in this role and why it mattered.',
    },
    {
        role: 'SWE Intern',
        company: 'Goldman Sachs',
        dateRange: 'June 2025 - August 2025',
        description: 'Placeholder description of what you did in this role and why it mattered.',
    },
    {
        role: 'CS Student',
        company: 'University of Lagos',
        dateRange: 'January 2020 - PRESENT',
        description: 'Placeholder description of what you did in this role and why it mattered.',
    },
]

function page() {
    return (
        <>
            <div>
                <Image src="/images/header.gif" alt="header image" width={1500} height={600} className="w-full h-75 object-cover object-center" />
            </div>
            <div>
                <div className="max-w-6xl mx-auto p-6 ">
                    <div className="mt-12 w-full flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <Image src="/images/flower-can.png" alt="Logo" width={321} height={471} className="w-30 -mt-40" />
                            <h2
                                className=" font-bold tracking-tight text-4xl lg:text-7xl ">About Dee Caulcrick</h2>
                            <p className="text-xl md:text-2xl ">
                                Designer, developer, obsessive builder.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-22">
                            <div className="order-2 md:order-1">
                                <p className='text-lg md:text-xl'>
                                    It&apos;s hard to give myself a title because not only do I think it&apos;s hard to describe what I do but titles are very boxy. I have a lot of interests. Most of my work sits under the umbrellas of design, engineering, R&D, and systems thinking. 
                                    <br/>
                                    <br/>
                                    I&apos;ve recently been doing a lot of reading and technical writing in a bid to learn and express myself more.
                                    <br/>
                                    <br/>
                                    I currently work at Mainhedge Research where I explore finance, payments & cryptography.
                                    <br/>
                                    <br/>
                                    Here&apos;s what I&apos;ve been up to in the past year:
                                </p>
                                <div className="mt-6">
                                     <Timeline items={timelineItems} />
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <Image src="/images/deborah-caulcrick.png" alt="Logo" width={1080} height={1350} className="w-[90%] rounded-lg mx-auto" />
                            </div>
                        </div>
                        <div className="max-w-3xl">
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page