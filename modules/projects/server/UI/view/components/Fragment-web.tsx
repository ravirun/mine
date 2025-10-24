import { useEffect, useState } from "react"
import { ExternalLinkIcon, RefreshCcwIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Fragment } from "@/lib/generated/prisma"
import { fa } from "zod/v4/locales"
import { Hint } from "../../hint"

interface FragmentWebProps {
    data: Fragment
}

export const FragmentWeb = ({ data }: FragmentWebProps) => {
    const [copied, setCopied] = useState(false)
    const [fragmentKey, setFragmentKey] = useState(0)

    const onRefresh = () => {
        setFragmentKey(prev => prev + 1)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(data.sandboxUrl)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div className="flex flex-col h-full">
            <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
                <Hint text="Refresh" side="bottom" align="start">
                <Button variant="outline" size="sm" onClick={onRefresh}>
                    <RefreshCcwIcon />
                </Button>
                </Hint>
               
                <Hint text="Copy" side="bottom" align="center">
                <Button variant="outline" size="sm" 
                className="flex-1 justify-start text-start font-normal"
                disabled={!data.sandboxUrl || copied}
                onClick={handleCopy}
                >
                    <span className="truncate">
                        {data.sandboxUrl}
                    </span>
                </Button>
                </Hint>
                <Hint text="Open in a new tab" side="bottom" align="end">
                <Button variant="outline" size="sm" disabled={!data.sandboxUrl} onClick={() => {
                    if (!data.sandboxUrl) return
                    window.open(data.sandboxUrl, "_blank")
                }}>
                    <ExternalLinkIcon />
                </Button>
                </Hint>

            </div>

            <iframe 
            key={fragmentKey}
            className="h-full w-full" sandbox="allow-forms allow-scripts allow-same-origin" loading="lazy" src={data.sandboxUrl} title={data.title} />
        </div>
    )
}
