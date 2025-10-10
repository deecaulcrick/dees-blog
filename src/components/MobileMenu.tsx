import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

const components = [
    {
        title: "Home",
        href: "/",

    },
    {
        title: "Snippets",
        href: "/snippets",
    },
    {
        title: "Library",
        href: "/library",
    },
    {
        title: "About",
        href: "/about",
    },
]

function MobileMenu() {
    return (

        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >

                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList >
        </NavigationMenu>

    )
}

function ListItem({
    title,

    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-mono uppercase">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">

                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default MobileMenu