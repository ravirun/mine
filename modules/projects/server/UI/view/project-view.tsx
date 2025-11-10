"use client"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { MessagesContainer } from "@/modules/projects/server/UI/view/components/MessagesContainer"
import { Suspense } from "react"
import { Fragment } from "@/lib/generated/prisma"
import { useState } from "react"
import { ProjectHeader } from "@/modules/projects/server/UI/view/components/project-header"
import { FragmentWeb } from "@/modules/projects/server/UI/view/components/Fragment-web"


interface ProjectViewProps {
    projectId: string
}
export const ProjectView = ({ projectId }: ProjectViewProps) => {
    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null)


    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={35} minSize={20} className="flex flex-col min-h-0">
                    <Suspense fallback={<div>Loading project...</div>}>
                    <ProjectHeader projectId={projectId} />
                    </Suspense>
                    <Suspense fallback={<div>Loading messages...</div>}>
                        <MessagesContainer projectId={projectId} activeFragment={activeFragment} setActiveFragment={setActiveFragment} />
                    </Suspense>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={65} minSize={50}>
                   {!!activeFragment && <FragmentWeb data={activeFragment} />}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}