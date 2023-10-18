import { publicProcedure, router } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { ItemRouter } from "@/outputTypes/stock";
import { z } from "zod";

export const itemRouter = router({
    all: publicProcedure.query(async opts => {
        try {
            const items: ItemRouter[] = await opts.ctx.prisma.item.findMany({
                select: {
                    id: true,
                    name: true,
                    brand: true,
                    exd: true,
                    mfd: true,
                    quantity: true,
                    buying_price: true,
                    selling_price: true,
                    serial_no: true,
                    stock: {
                        select: {
                            id: true,
                            stock_no: true,
                            date: true,
                        },
                    },
                },
            });
            return items;
        } catch (e) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Something went wrong",
            });
        }
    }),
    getByBrand: publicProcedure
        .input(
            z.object({
                query: z.string(),
            })
        )
        .query(async opts => {
            const results: ItemRouter[] = await opts.ctx.prisma.item.findMany({
                where: {
                    OR: [
                        {
                            brand: {
                                contains: opts.input.query,
                            },
                        },
                        {
                            name: {
                                contains: opts.input.query,
                            },
                        },
                    ],
                },
                select: {
                    id: true,
                    name: true,
                    brand: true,
                    exd: true,
                    mfd: true,
                    quantity: true,
                    buying_price: true,
                    selling_price: true,
                    serial_no: true,
                    stock: {
                        select: {
                            id: true,
                            stock_no: true,
                            date: true,
                        },
                    },
                },
            });
            console.log(results);
            return results;
        }),
});
