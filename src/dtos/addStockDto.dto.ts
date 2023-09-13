import { z } from "zod";

export const addStockDto = z.object({
    stock_no: z.string(),
    distributor: z.object({
        name: z.string(),
        tel: z.string(),
        email: z.string(),
        address: z.string(),
        agent: z
            .object({
                name: z.string().optional(),
                tel: z.string(),
                email: z.string(),
            })
            .optional(),
    }),
    items: z
        .object({
            name: z.string(),
            brand: z.string(),
            quantity: z.number(),
            serial_no: z.string(),
            mfd: z.date(),
            exd: z.date(),
            selling_price: z.number(),
            buying_price: z.number(),
        })
        .array(),
    cost: z.number(),
});

export const item = z.object({
    name: z.string(),
    brand: z.string(),
    quantity: z.number(),
    serial_no: z.string(),
    mfd: z.date(),
    exd: z.date(),
    selling_price: z.number(),
    buying_price: z.number(),
});

export type Item = z.infer<typeof item>;
