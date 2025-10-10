'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`py-2 rounded ${isActive
                ? 'text-theme-teal dark:text-theme-blue'
                : 'text-zinc-500 hover:text-theme-dark-pink'
                }`}
        >
            {children}
        </Link>
    )
}
