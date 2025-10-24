
import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import { MessageCard } from "./Message-card"
import { MessageForm } from "./Message-form"
import { useEffect, useRef } from "react"
import { Fragment } from "@/lib/generated/prisma"
import { MessageLoading } from "./Message-loading"


interface Props {
    projectId: string
    activeFragment: Fragment | null
    setActiveFragment: (fragment: Fragment) => void
}

export const MessagesContainer = ({ projectId, activeFragment, setActiveFragment }: Props) => {
    const trpc = useTRPC()
    const bottomRef = useRef<HTMLDivElement>(null)
    
    
    const { data: messages } = useSuspenseQuery(trpc.messages.getMany.queryOptions({ 
        projectId: projectId
    }, {
        // TODO: Temporary live message update
        refetchInterval: 5000
    }))

    useEffect(() => {
        const lastAssistantMessageWithFragment = messages.findLast(
        (message) => message.role === "ASSISTANT" && !!message.fragments

        )
        if (lastAssistantMessageWithFragment) {
            setActiveFragment(lastAssistantMessageWithFragment.fragments!)
        }
    }, [messages ,setActiveFragment])

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef?.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages.length])

    const lastMessage = messages[messages.length - 1]
    const isLastUser = lastMessage?.role === "USER"
   
    return (
        <div className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="pt-2 pr-1">
                    {messages.map((message) => (
                        <MessageCard    
                         key={message.id}
                         content={message.content} 
                         role={message.role}
                         fragment={message.fragments}
                         createdAt={message.createdAt}
                         isActiveFragment={activeFragment?.id === message.fragments?.id}
                         onFragmentClick={(fragment) => setActiveFragment(fragment)}
                         type={message.type}
                         />
                    ))}
                    {isLastUser && <MessageLoading />}
                    <div ref={bottomRef} />
                </div>
            </div>
            <div className="relative p-3 pt-1">
                <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background dark:to-background"/>
            <MessageForm projectId={projectId} />
            </div>
        </div>
    )
}