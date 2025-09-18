'use client'
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl, synthwave84, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
    children: string
    className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : 'text'

    const { theme } = useTheme();
    const syntaxTheme = theme === "dark" ? synthwave84 : duotoneLight;
    const bgColor = theme === "dark" ? "#1a1a1a" : "#F2F7FF";


    return (
        <div className="my-6">
            {/* {match && (
                <div className="text-black dark:text-white -mt-2 px-4 py-2 text-sm font-mono border-b border-gray-200">
                    {language}
                </div>
            )} */}
            <SyntaxHighlighter
                style={syntaxTheme}
                customStyle={{ margin: 0, padding: '1rem', backgroundColor: bgColor }}
                language={language}
                PreTag="div"
                className="rounded-b-lg mt-0"
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        </div>
    )
}