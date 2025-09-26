import React from 'react'
import Link from 'next/link'

interface LinkItemProps {
    link: string,
    linkText: string
}

function LinkItem({ linkText, link }: LinkItemProps) {
    return (
        <Link href={link} className='text-black dark:text-white font-normal hover:font-medium'>{linkText}</Link>
    )
}

export default LinkItem

