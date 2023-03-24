import { z } from "zod"
import { publicProcedure, createTRPCRouter } from "../trpc"


export const adminRouter = createTRPCRouter({
    create: publicProcedure
    .input(z.object({
        name: z.string(),
    }))
    .mutation(async ({ input, ctx }) => {
        const createClient = await ctx.prisma.client.create({
            data: {
                name: input.name
            }
        });
        return { createClient, message: "Client created successfully!" }
    }),

    readAll: publicProcedure
    .query(async ({ ctx }) => {
        const readAllClients = await ctx.prisma.client.findMany();
        return readAllClients.map(({ id, name }) => (
            { id, name }
        ))
    }),
    
    update: publicProcedure
    .input(z.object({
        id: z.string(),
        name: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
        const updateClient = await ctx.prisma.client.update({
            data: {
                name: input.name
            },
            where: {
                id: input.id
            }
        });
        return { updateClient, message: "Client updated successfully!" }
    }),

    delete: publicProcedure
    .input(z.object({
        id: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
        const deleteClient = await ctx.prisma.client.delete({
            where: {
                id: input.id
            }
        });
        return { deleteClient, message: "Client deleted successfully" }
    })
});