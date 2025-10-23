import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { inngest } from "@/inngest/client";
import { generateSlug } from "random-word-slugs";


export const projectsRouter = createTRPCRouter({
    getMany: baseProcedure
    .query(async () => {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return projects;
    }),
    create: baseProcedure
    .input(z.object({
        value: z.string().min(1, { message: "Prompt is required" }).max(10000, { message: "Prompt is too long" })
    })
    )
    .mutation(async ({ input }) => {
        console.log("Prisma object:", typeof prisma);
    console.log("Prisma project:", typeof prisma?.project);
    console.log("Prisma project create:", typeof prisma?.project?.create);
    
    if (!prisma) {
        throw new Error("Prisma client is undefined");
    }
    
    if (!prisma.project) {
        throw new Error("Prisma project model is undefined");
    }
    
    if (!prisma.project.create) {
        throw new Error("Prisma project.create method is undefined");
    }
        const createdProject = await prisma.project.create({
            data: {
                name: generateSlug(2, { 
                    format: "kebab"
                 }),
                 messages: {
                    create: {
                        content: input.value,
                        role: "USER",
                        type: "RESULT",
                    },
                 },
            },
        });
        await inngest.send({
            name: "code-agent/run",
            data: {
               value: input.value,
               projectId: createdProject.id,
            },
        });
        return createdProject;
    })

});