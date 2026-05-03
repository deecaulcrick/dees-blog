import React from 'react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Shelf from '@/components/drawings/Shelf'

function page() {
    return (
        <div className=''>
            <div className='px-8 md:px-16 py-16'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                    {/* Intro */}
                    <Card className='md:col-span-4 flex flex-col-reverse md:flex-row justify-between items-center p-12'>
                        <div className='md:w-[60%] '>
                            <h1 className='font-heading font-light text-4xl mb-4 tracking-tight'>Hi, I&apos;m Dee Caulcrick</h1>

                            <p className=''>I started building on the web in 2016 and just kept going.
                                I’ve worked as a web developer, software engineer and occasional UI/UX designer. I’ve also taught web development fundamentals to kids and at GDGOC UNILAG chapter.
                                <br />
                                <br />
                                These days, I&apos;m  focused on completing my computer science degree and scoring a new grad role.
                            </p>
                        </div>

                        <div>
                            <Image src="/images/my-face.png" alt="Dee Caulcrick"
                                width={300}
                                height={300}
                            />
                        </div>
                    </Card>
                    {/* Location */}
                    <Card className='md:col-span-2 row-span-2 flex flex-col items-center'>
                        <Shelf />
                        <p className='text-center mt-4'>Here’s what I’m currently reading, watching and listening to.</p>
                    </Card>
                    {/* Fun fact */}

                    <Card className='md:col-span-2 lg:col-span-1 text-center flex justify-center items-center'>
                        <p>
                            I’ve lived in Lagos, Nigeria, all my life and would love to live abroad for the remainder of my twenties.
                        </p>
                    </Card>
                    {/* Name pronunciation? */}
                    <Card className="md:col-span-2 lg:col-span-1 text-center">
                        <h3 className='font-heading  text-3xl tracking-tight font-light mb-2'>caulcrick</h3>
                        <p>My last name gets pronounced wrongly a lot. Click to hear a robot pronounce it.</p>

                    </Card>
                    {/* fave books */}

                    <Card className='md:col-span-2 lg:col-span-1'>
                        <Image src="/images/deeLondon.jpeg" alt="Dee Caulcrick"
                            width={300}
                            height={300}
                            className='w-full h-auto mb-4'
                        />
                        <p className='text-center text-sm'>Spent #Summer25 at Goldman Sachs in Birmingham, UK where I worked as a Software Engineer</p>
                    </Card>
                    {/* {stuff i've built} */}
                    <Card className='md:col-span-2 lg:col-span-1 lg:row-span-2'>
                        <h3 className='font-heading text-3xl tracking-tight font-light mb-2'>Projects</h3>
                        <p>I enjoy building cool stuff including Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='mt-4'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
                    </Card>
                    {/* work */}
                    <Card>7</Card>
                    {/* hope to speak */}
                    <Card className='md:col-span-2'>8</Card>

                </div>
            </div>

        </div >
    )
}

export default page