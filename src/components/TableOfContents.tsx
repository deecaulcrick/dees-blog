'use client'

import { useEffect, useState } from 'react'

interface TocItem {
    id: string
    title: string
    level: number
}

interface TableOfContentsProps {
    content?: string
    className?: string
}

export default function TableOfContents({ content, className = '' }: TableOfContentsProps) {
    const [toc, setToc] = useState<TocItem[]>([])
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        if (content) {
            // Extract headings from markdown content
            const headingRegex = /^(#{1,6})\s+(.+)$/gm
            const headings: TocItem[] = []
            let match

            while ((match = headingRegex.exec(content)) !== null) {
                const level = match[1].length
                const title = match[2].trim()
                const id = title.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '')

                headings.push({
                    id,
                    title,
                    level,
                })
            }

            setToc(headings)
        } else {
            // Extract headings from DOM (after MDX is rendered)
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
            const tocItems: TocItem[] = []

            headings.forEach((heading) => {
                if (heading.id) {
                    tocItems.push({
                        id: heading.id,
                        title: heading.textContent || '',
                        level: parseInt(heading.tagName[1]),
                    })
                }
            })

            setToc(tocItems)
            console.log(tocItems);
        }
    }, [content])

    useEffect(() => {
        // Track active heading based on scroll position
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-20% 0% -35% 0%',
                threshold: 0,
            }
        )

        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        headings.forEach((heading) => observer.observe(heading))

        return () => observer.disconnect()
    }, [])

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    if (toc.length === 0) return null

    return (
        <div className={`toc-container ${className}`}>
    
            <nav className="toc-nav">
                <ul className="space-y-1">
                    {toc.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToHeading(item.id)}
                                className={`
                  block w-full text-right py-1 px-2 rounded text-xs transition-colors hover:text-theme-dark-pink
                  ${activeId === item.id ? 'text-theme-dark-pink font-medium bg-orange/10' : 'text-gray-700 dark:text-white'}
                `}
                                style={{
                                    paddingLeft: `${(item.level - 1) * 12 + 8}px`,
                                }}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}