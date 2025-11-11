// import { CopyCheckIcon, CopyIcon } from "lucide-react";
// import { useState, useMemo, useCallback, Fragment } from "react";
// import { Hint } from "@/modules/projects/server/UI/hint";
// import { Button } from "@/components/ui/button";
// import { CodeView } from '@/modules/projects/server/UI/code-view'
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbEllipsis, } from "@/components/ui/breadcrumb";


// type FileCollection = { [filePath: string]: string; };

// function getLanguageFromExtension(filePath: string): string {
//     const extension = filePath.split('.').pop()?.toLowerCase()
//     return extension || 'text'
// }

// interface FileExplorerProps {
//     files: FileCollection;
// }

// export const FileExplorer = ({ files }: FileExplorerProps) => {
//     const { selectedFile, setSelectedFile } = useState<string | null>(() => {
//         const fileKeys = Object.keys(files);
//         return fileKeys.length > 0 ? fileKeys[0] : null;
//     });
//     return <ResizablePanelGroup direction="horizontal">
//         <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
//             <p>
//                 Todo : tree view
//             </p>
//         </ResizablePanel>
//         <ResizableHandle className="hover:bg-primary transition-color" />
//         <ResizablePanel defaultSize={70} minSize={50}>
//             {selectedFile && files[selectedFile]
//                 ? (
//                     <div className="h-full w-full flex flex-col">
//                         <div className="border-b bg-sidebar px-4 py-2 flex items-center justify-between gap-x-2">
//                             <Hint text="Copy to clipboard" side="bottom">
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     className="ml-auto"
//                                     onClick={() => { }}
//                                     disabled={false}
//                                 >
//                                     <CopyIcon />
//                                 </Button>

//                             </Hint>
//                         </div>
//                         <div className="flex-1 overflow-auto">
//                             <CodeView code={files[selectedFile]} lang={getLanguageFromExtension(selectedFile)} />
//                         </div>
//                     </div>
//                 )
//                 : (
//                     <div className="flex items-center justify-center h-full text-muted-foreground">
//                         <p>Select File To Preview it content</p>
//                     </div>
//                 )

//             }
//         </ResizablePanel>
//     </ResizablePanelGroup>
// }