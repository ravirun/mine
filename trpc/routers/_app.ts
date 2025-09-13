
import { messageRouter } from '@/modules/messages/server/procedure';
import {  createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
  messages: messageRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
