import { publicProcedure, router } from "@/server/trpc";
import { createOrderDto } from "@/dtos/createOrderDto.dto";

export const ordersRouter = router({
    all: publicProcedure.query(async opts => {
        return await opts.ctx.prisma.order.findMany({
            include: {
                items: true,
                employee: true,
                sales: true,
                invoice: true,
                client: true,
            },
        });
    }),
    addOrder: publicProcedure.input(createOrderDto).mutation(async opts => {}),
});
