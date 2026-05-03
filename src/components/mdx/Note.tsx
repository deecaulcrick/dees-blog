import React from 'react'

interface NoteProps {
    title: string,
    children: React.ReactNode;
}

function Note({ title, children }: NoteProps) {
    return (
        <div className='bg-foreground/5 '>
            <div className='p-8 border-b-20 border-theme-green'>
                <h3 className='font-sans text-3xl font-bold'>{title} </h3>
            </div>
            <div className='p-8 text-xl leading-10'>{children}</div>
        </div>
    )
}

export default Note