'use client'
import React from 'react'
import { useTheme } from 'next-themes'

function SoundOff() {
    const { theme } = useTheme();
    const color = theme === "dark" ? "white" : "black";
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    )
}

export default SoundOff