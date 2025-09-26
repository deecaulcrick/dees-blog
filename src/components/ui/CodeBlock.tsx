'use client'
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { customDarkTheme } from "@/lib/customDarkTheme";
import { customLightTheme } from "@/lib/customLightTheme";
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
    children: string
    className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : 'text'

    const { theme } = useTheme();
    const syntaxTheme = theme === "dark" ? customDarkTheme : customLightTheme;



    return (
        <div className="my-6">
            {/* {match && (
                <div className="text-black dark:text-white -mt-2 px-4 py-2 text-sm font-mono border-b border-gray-200">
                    {language}
                </div>
            )} */}
            <SyntaxHighlighter
                style={syntaxTheme}
                customStyle={{ margin: 0, padding: '1rem'}}
                language={language}
                PreTag="div"
                className="rounded-b-lg mt-0"
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        </div>
    )
}