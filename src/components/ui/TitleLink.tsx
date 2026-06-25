import Link from 'next/link'
import {ArrowRight} from 'lucide-react'

function TitleLink({link, title}: {link: string, title: string}) {
  return (
    <h2 className="group md:text-3xl font-semibold text-2xl lowercase hover:text-theme-pink tracking-tight transition-colors duration-300">
        <Link href={link}>{title}</Link>
        <ArrowRight size={24} strokeWidth={1.5} className="inline-block ml-2 group-hover:text-theme-green group-hover:translate-x-2 transition-transform duration-300" />
    </h2>
  )
}

export default TitleLink