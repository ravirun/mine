"use client"
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function Client() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.createAiWebsite.queryOptions({ name: "client", description: "client", keywords: ["client"], pages: [{ name: "client", content: "client" }] }))

  return <div>{JSON.stringify(data)} </div>
}