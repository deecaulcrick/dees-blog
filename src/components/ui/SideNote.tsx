import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Asterisk from '@/components/icons/Asterisk'

function SideNote({ sidenote }: { sidenote: string }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Asterisk />
            </TooltipTrigger>
            <TooltipContent>
                <p>{sidenote}</p>
            </TooltipContent>
        </Tooltip>

    )
}

export default SideNote