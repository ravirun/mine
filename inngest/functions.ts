import { inngest } from "./client";
import { createAgent, openai } from '@inngest/agent-kit';
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
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
    return {output};
  },
);