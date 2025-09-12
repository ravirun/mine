import { inngest } from "./client";
import { getSandboxId } from "./utils";
import { Sandbox } from "@e2b/code-interpreter";  
import { createAgent, openai } from '@inngest/agent-kit';
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event,step }) => {
     const sandboxid = await step.run('get-sandbox-id', async () => {
      const sandbox = await Sandbox.create('mine-nextjs-test-2')
      return sandbox.sandboxId
    })

    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are a expert next.js developer that writes readable, maintainable, and efficient code. You write simple write simple next.js and react snippets.",
      tools: [],
      model: openai({
        model: "gpt-4o",
      }),
    });
    const { output } = await codeAgent.run(
            `write a simple next.js and react snippet that ${event.data.value}`,
      );

      const sandboxUrl = await step.run('get-sandbox-url', async () => {
        const sandbox = await getSandboxId(sandboxid)
        const host = await sandbox.getHost(3000)
        return `https://${host}`
      })
    return {output, sandboxUrl};
  },
);