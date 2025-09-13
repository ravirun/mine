import z from "zod";
import { inngest } from "./client";
import { getSandboxId, lastAssistantTextMessaageContent } from "./utils";
import { Sandbox } from "@e2b/code-interpreter";
import { createAgent, createNetwork, createTool, openai } from '@inngest/agent-kit';
import { PROMPT } from "@/prompt";
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxid = await step.run('get-sandbox-id', async () => {
      const sandbox = await Sandbox.create('mine-nextjs-test-2')
      return sandbox.sandboxId
    })

    const codeAgent = createAgent({
      name: "code-agent",
      system: PROMPT,
      description: "an exert coding agent that writes readable, maintainable, and efficient code. ",
      model: openai({ model: "gpt-4.1", defaultParameters: { temperature: 0.1 } }),
      tools: [
        createTool({
          name: "terminal",
          description: "Run terminal commands in a sandboxed environment",
          parameters: z.object({
            command: z.string()
          }),
          handler: async ({ command }, { step }) => {
            return await step?.run('run-terminal-command', async () => {
              const bufers = { stdout: "", stderr: "" }
              try {
                const sandbox = await getSandboxId(sandboxid)
                const result = await sandbox.commands.run(command, {
                  onStdout: (data: string) => {
                    bufers.stdout += data
                  },
                  onStderr: (data: string) => {
                    bufers.stderr += data
                  }

                })
                return bufers.stdout
              } catch (e) {
                console.error(`Command failed ${e} \nstdout: ${bufers.stdout} \nstderr: ${bufers.stderr}`)
                return `Command failed ${e} \nstdout: ${bufers.stdout} \nstderr: ${bufers.stderr}`
              }

            })
          }
        }),
        createTool({
          name: "createOrUpdateFiles",
          description: "Create or update files in a sandboxed environment",
          parameters: z.object({
            files: z.array(
              z.object({
                path: z.string(),
                content: z.string()
              }))
          }),
          /*
          {
          "app.tsx": "<p>App Page</p>"
          same for other files
          "button.tsx": "<p>Button Component</p>"
          }
          */
          handler: async ({ files }, { step, network }) => {
            const newfiles = await step?.run('create-or-update-files', async () => {
              try {
                const updatedFiles = network.state.data.files || []
                const sandbox = await getSandboxId(sandboxid)

                for (const file of files) {
                  await sandbox.files.write(file.path, file.content)
                  updatedFiles[file.path] = file.content
                }
                return updatedFiles;
              } catch (e) {
                console.error(`Error creating or updating files ${e}`)
                return `Error creating or updating files ${e}`
              }
            })
            if (typeof newfiles === 'object') {
              network.state.data.files = newfiles
            }
            return newfiles
          }
        }),
        createTool({
          name: "readFiles",
          description: "Read files in a sandboxed environment",
          parameters: z.object({
            files: z.array(z.string())
          }),
          handler: async ({ files }, { step }) => {
            return await step?.run('read-files', async () => {
              try {
                const sandbox = await getSandboxId(sandboxid)
                const contents = []
                for (const file of files) {
                  const content = await sandbox.files.read(file)
                  contents.push({ path: file, content: content })
                }
                return JSON.stringify(contents)
              } catch (e) {
                return "Error reading files" + e

              }
            })
          }
        })
      ],
      lifecycle: {
        onResponse: async ({ result, network }) => {
          const lastAssistantMessageText = lastAssistantTextMessaageContent(result)
          if (lastAssistantMessageText && network) {
            if (lastAssistantMessageText.includes("<task_summary>")) {
              network.state.data.summary = lastAssistantMessageText
            }
          }
          return result;
        }
      }
    });

    const network = createNetwork({
      name: "code-agent-network",
      agents: [codeAgent],
      maxIter: 10,
      router: async ({ network }) => {
        const summary = network.state.data.summary
        if (summary) {
          return
        }
        return codeAgent;
      }
    })
    const result = await network.run(event.data.value)

    const sandboxUrl = await step.run('get-sandbox-url', async () => {
      const sandbox = await getSandboxId(sandboxid)
      const host = await sandbox.getHost(3000)
      return `https://${host}`
    })
    return {
      url: sandboxUrl,
      title: "Mine",
      files: result.state.data.files,
      summary: result.state.data.summary,


      
     };
  },
);