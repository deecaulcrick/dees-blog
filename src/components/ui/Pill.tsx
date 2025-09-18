import React from 'react'

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <div className='py-2 px-4 rounded-lg bg-theme-green w-fit text-black text-sm'>{children}</div>
    )
}

export default Pill