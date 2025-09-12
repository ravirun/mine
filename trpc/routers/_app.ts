import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
    invokeInngest: baseProcedure
    .input(z.object({
        text: z.string(),
    }))
    .mutation(async ({ input }) => {
        await inngest.send({
            name: "test/hello.world",
            data: {
                text: input.text,
            },
        });
    }),
  createAiWebsite: baseProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
        pages: z.array(z.object({
          name: z.string(),
          content: z.string(),
        })),
      }),
    )
    .query((opts) => {
      return {
        aiWebsite: `ai website ${opts.input.name}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
