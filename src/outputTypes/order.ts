import { z } from "zod";
import { OrderStatus } from "@/Components/ordersComponents/orderStatus";

export const createdOrderOutput = z.object({
    id: z.string(),
    order_no: z.string(),
    items: z
        .object({
            itemId: z.string(),
            quantity: z.number(),
            cost: z.number(),
        })
        .array(),
    status: z.nativeEnum(OrderStatus),
    client: z
        .object({
            name: z.string(),
            tel: z.string(),
            email: z.string().email(),
            company: z
                .object({
                    name: z.string(),
                    address: z.string(),
                    tel: z.string(),
                    email: z.string().email(),
                })
                .optional(),
        })
        .optional(),
    date_time: z.date(),
});
