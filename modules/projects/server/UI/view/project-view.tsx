"use client"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { MessagesContainer } from "@/modules/projects/server/UI/view/components/MessagesContainer"
import { Suspense } from "react"
import { Fragment } from "@/lib/generated/prisma"
import { useState } from "react"
import { ProjectHeader } from "@/modules/projects/server/UI/view/components/project-header"
import { FragmentWeb } from "@/modules/projects/server/UI/view/components/Fragment-web"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, CrownIcon, EyeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CodeView } from "@/modules/projects/server/UI/code-view"
// import { FileExplorer } from "../file-explorer"

interface ProjectViewProps {
    projectId: string
}
export const ProjectView = ({ projectId }: ProjectViewProps) => {
    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null)
    const [tabState, setTabState] = useState<"preview" | "code">("preview")


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
                    <Tabs
                        className="h-full gay-y-0"
                        defaultValue="preview"
                        value={tabState}
                        onValueChange={(value) => setTabState(value as "preview" | "code")}
                    >
                        <div className="w-full flex item-center p-2 border-b gap-x-2">
                            <TabsList className="h-8 border rounded-md ">
                                <TabsTrigger value="preview">
                                    <EyeIcon className="" />
                                    <span>Demo</span>
                                </TabsTrigger>
                                <TabsTrigger value="code">
                                    <Code className="" />
                                    <span>Code</span>
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-x-2">
                                <Button asChild variant="default" size="sm">
                                    <Link href="/pricing">
                                        <CrownIcon /> Upgrade
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="preview" className="h-full">
                            {!!activeFragment && <FragmentWeb data={activeFragment} />}
                        </TabsContent>
                        <TabsContent value="code" className="h-full">
                            {/* {!!activeFragment?.files && <FileExplorer files={activeFragment.files as { [filePath: string]: string; }} /> } */}
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}