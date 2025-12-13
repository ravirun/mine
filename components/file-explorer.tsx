import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useCallback, useMemo, useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { CodeView } from "@/components/code-view";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem,  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { convertFilesToTreeItems } from "@/lib/utils";
import { TreeView } from "@/components/tree-view";

type FileCollection = { [path: string]: string }

// app.tsx -> tsx
const getLanguageFromExtension = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    return extension || 'text'
}


interface FileBreadcrumbProps {
    filePath: string
}
const FileBreadcrumb = ({ filePath }: FileBreadcrumbProps) => {
    const pathSegments = filePath.split('/');
    const maxSegments = 3;

    const renderBreadcrumbItems = () => {
        if (pathSegments.length <= maxSegments) {
            // show all segments if 3 or less
            return pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1

                return (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {isLast ? (
                                <BreadcrumbPage className="font-medium">
                                    {segment}
                                </BreadcrumbPage>
                            ) : (
                                <span className="text-muted-foreground">
                                    {segment}
                                </span>
                            )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                    </Fragment>
                )
            })
        } else {
            // show first segment, ellipses, and last segment
            const firstSegment = pathSegments[0]
            const lastSegment = pathSegments[pathSegments.length - 1]

            return (
                <>
                    <BreadcrumbItem>
                        <span className="text-muted-foreground">
                            {firstSegment}
                        </span>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium">
                                {lastSegment}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbItem>
                </>
            )
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {renderBreadcrumbItems()}
            </BreadcrumbList>
        </Breadcrumb>
    )

}

interface FileExplorerProps {
    files: FileCollection
}



export const FileExplorer = ({ files }: FileExplorerProps) => {

    const [copied, setCopied] = useState(false)

    const [selectedFile, setSelectedFile] = useState<string | null>(() => {
        const fileKeys = Object.keys(files)
        return fileKeys.length > 0 ? fileKeys[0] : null
    })

    const treeData = useMemo(() => {
        return convertFilesToTreeItems(files)
    }, [files])

    const HandleFileSelect = useCallback((filePath: string) => {
        if (files[filePath]) {
            setSelectedFile(filePath)
        }
    }, [files])

    const handleCopy = useCallback(() => {
        if (selectedFile) {
            navigator.clipboard.writeText(files[selectedFile])
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [selectedFile, files])

    return <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={20} className="background-sidebar">
            <TreeView data={treeData} value={selectedFile} onSelect={HandleFileSelect} />
        </ResizablePanel>
        <ResizableHandle className="hover:bg-primary/10 transition-colors" />
        <ResizablePanel defaultSize={70} minSize={50}>
            {selectedFile && files[selectedFile] ? (
                <div className="h-full w-full flex flex-col">
                    <div className="border-b bg-sidebar px-4 py-2 flex items-center justify-between gap-x-2">
                        <FileBreadcrumb filePath={selectedFile} />
                        <Hint text="Copy to clipboard" side="bottom" >
                            <Button variant="outline" size="icon" className="ml-auto" onClick={handleCopy} disabled={ copied}>
                                {copied ? <CopyCheckIcon /> : <CopyIcon />}
                            </Button>
                        </Hint>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <CodeView
                            lang={getLanguageFromExtension(selectedFile)}
                            code={files[selectedFile]}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <p>TODO: Select a file to view its content</p>
                </div>
            )
            }
        </ResizablePanel>
    </ResizablePanelGroup>

}