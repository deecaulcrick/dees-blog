import React from 'react'
interface SidenoteProps {
    note: string;
}

function Sidenote({ note }: SidenoteProps) {
    return (
        <div className='w-full flex items-center justify-center my-6'>
            <div className='bg-foreground/2 border p-4 font-sans font-medium w-fit'>
                <p className='text-sm leading-none text-center'>

                    {note}
                </p>
            </div>
        </div>
    )
}

export default Sidenote