"use client"

import React, { useState, useRef, useCallback } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

const DRAGGABLE_IMAGES = [
    { src: "/images/hero/cursor.svg", width: 100, height: 100, top: "-12%", left: "0%", rotate: 22 },
    { src: "/images/hero/star.svg", width: 120, height: 120, top: "5%", left: "14%", rotate: 22 },
    { src: "/images/hero/window.svg", width: 120, height: 120, top: "18%", left: "38%", rotate: -3 },
    { src: "/images/hero/pencil.svg", width: 120, height: 120, top: "10%", left: "80%", rotate: -14 },
    { src: "/images/hero/laptop.svg", width: 120, height: 120, top: "52%", left: "2%", rotate: -5 },
    { src: "/images/hero/folder.svg", width: 120, height: 120, top: "60%", left: "28%", rotate: -11 },
    { src: "/images/hero/whiteboard.svg", width: 120, height: 120, top: "58%", left: "64%", rotate: 6 },
    { src: "/images/hero/mouse.svg", width: 120, height: 120, top: "2%", left: "62%", rotate: -19 },
]

function MobileHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setCursorPos({ x: e.clientX, y: e.clientY })
    }, [])

    return (
        <div className="min-h-[70vh] flex flex-col border-b border-dashed border-border px-10 p-10 justify-center items-center text-center"
            onMouseMove={handleMouseMove}
            ref={containerRef}
        >
            {/* Custom drag cursor */}
            {isActive && (
                <div
                    className="pointer-events-none fixed z-[9999]"
                    style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-3px, -2px)' }}
                >
                    <Image src="/images/hero/drag.svg" width={100} height={100} alt="" />
                </div>
            )}

            {/* Text content */}
            <div className="max-w-3xl p-12 flex flex-col justify-center relative z-10">
                <div className="-rotate-7 ml-14">
                    <Image src="/images/hero/hi.svg" width={100} height={100} alt="" />
                </div>
                <h1 className="text-8xl font-bold tracking-tight leading-20 flex items-center gap-3 flex-wrap text-center justify-center">
                    deborah
                    <br />caulcrick
                </h1>
                <Image src="/images/hero/dee.svg" width={120} height={120} alt="" className="absolute self-end -rotate-12 inline-block -mt-20 mr-10" />
                <p className="font-body text-xl mt-6">
                    I design and build things on the web (&amp; occassionally desktop) and empower regular folks with AI.
                    I&apos;m currently a Research Engineer exploring dynamic UI + playing with AI at Intelligent Design Labs
                </p>
            </div>

            {/* Draggable image section */}
            <div className="relative w-full h-72"
                style={{ cursor: isActive ? 'none' : 'auto' }}
            >
                {DRAGGABLE_IMAGES.map(({ src, width, height, top, left, rotate }) => (
                    <motion.div
                        key={src}
                        className="absolute select-none z-99"
                        style={{ top, left, rotate }}
                        drag
                        dragConstraints={containerRef}
                        dragElastic={0.08}
                        dragMomentum={false}
                        whileHover={{ scale: 1.08 }}
                        whileDrag={{ scale: 1.06, zIndex: 50 }}
                        onHoverStart={() => setIsActive(true)}
                        onHoverEnd={() => setIsActive(false)}
                        onDragStart={() => setIsActive(true)}
                        onDragEnd={() => setIsActive(false)}
                    >
                        <Image src={src} width={width} height={height} alt="" draggable={false} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default MobileHero
