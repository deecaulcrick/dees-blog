import React from 'react'

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`border border-dashed border-zinc-400  p-6 ${className}`}>{children}</div>
    )
}

export default Card