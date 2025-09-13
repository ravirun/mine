import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";

export const projectRouter = createTRPCRouter({
    getMany: baseProcedure
    .query(async () => {
        const projects = await prisma.project.findMany(
                {
                orderBy: {
                    createdAt: "desc",
                },  
            }
        );
        return projects;
    }),
    create: baseProcedure
        .input(
            z.object({
                value: z.string().min(1, { message: "project name is required" }),
            })
        )
        .mutation(async ({ input }) => {
            const createdProject = await prisma.project.create({
                data: {
                    name: input.value,
                },
            });
            return createdProject;
        }),
});
