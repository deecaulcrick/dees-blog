'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, PenLine, Link2, Code2, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import DarkModeToggle from '@/components/ui/DarkModeToggle'

const exploreItems = [
    { title: 'Articles', href: '/posts', description: 'Long-form writing on software, design and AI.', icon: PenLine },
    { title: 'Links', href: '/links', description: 'Interesting finds, papers, and quick thoughts.', icon: Link2 },
    { title: 'Snippets', href: '/snippets', description: 'Small pieces of code and quick reference notes.', icon: Code2 },
    { title: 'Library', href: '/library', description: "Books I've read and want to remember.", icon: BookOpen },
]
// bg-gradient-to-b from-[#D6FF94] to-[#F9F9F9]  dark:from-[#01412A] dark:to-[#181818]

function Header() {
    const pathname = usePathname()
    const [exploreOpen, setExploreOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const isActive = (href: string) => pathname.startsWith(href)

    return (
        <header className="relative ">
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
                <Link href="/" className="shrink-0 font-bold text-xl" onClick={() => setMobileOpen(false)}>
                    dee caulcrick.
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <button
                            onClick={() => setExploreOpen((v) => !v)}
                            className={cn(
                                'flex items-center gap-1 text-sm font-medium transition-colors',
                                exploreOpen ? 'text-theme-pink underline' : 'text-black hover:text-theme-dark-pink dark:text-white dark:hover:text-theme-pink'
                            )}
                        >
                            Explore
                            <ChevronDown className={cn('size-4 transition-transform', exploreOpen && 'rotate-180')} />
                        </button>
                        <Link
                            href="/about"
                            className={cn(
                                'text-sm font-medium transition-colors',
                                isActive('/about') ? 'text-theme-dark-pink underline' : 'text-black hover:text-theme-dark-pink dark:text-white dark:hover:text-theme-pink'
                            )}
                        >
                            About
                        </Link>
                    </nav>

                    <DarkModeToggle />

                    {/* Mobile trigger */}
                    <button onClick={() => setMobileOpen(true)} className="md:hidden" aria-label="Open menu">
                        <Menu className="size-6" />
                    </button>
                </div>
            </div>

            {/* Desktop mega menu */}
            {exploreOpen && (
                <>
                    <button
                        aria-label="Close menu"
                        className="fixed inset-0 z-40"
                        onClick={() => setExploreOpen(false)}
                    />
                    <div className="absolute right-4 top-full z-50 grid w-[520px] grid-cols-2 gap-x-8 gap-y-6 rounded-2xl bg-zinc-900 p-6 shadow-xl md:right-8">
                        {exploreItems.map(({ title, href, description, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setExploreOpen(false)}
                                className="group flex items-start gap-3"
                            >
                                <Icon className="mt-0.5 size-5 shrink-0 text-theme-blue" />
                                <div>
                                    <div className="font-semibold text-white group-hover:text-theme-pink">{title}</div>
                                    <p className="mt-1 text-sm text-zinc-400">{description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* Mobile overlay menu */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-muted md:hidden">
                    <div className="flex items-center justify-between px-4 py-4">
                        <Image src="/images/logo/logo.svg" alt="Logo" width={588} height={80} className="h-6 w-auto" />
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                            <X className="size-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 overflow-y-auto px-6 py-6">
                        {exploreItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="font-serif text-2xl text-white"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/about"
                            onClick={() => setMobileOpen(false)}
                            className="font-serif text-2xl text-white"
                        >
                            About
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
