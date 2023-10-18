import { publicProcedure, router } from "../trpc";
import { employeeRouter } from "@/server/routers/employee";
import { stockRouter } from "@/server/routers/stocks";
import { itemRouter } from "@/server/routers/item";
import { ordersRouter } from "@/server/routers/orders";

export const appRouter = router({
    health_check: publicProcedure.query(() => {
        console.log("Health check");
    }),
    employee: employeeRouter,
    stock: stockRouter,
    item: itemRouter,
    order: ordersRouter,
});

export type AppRouter = typeof appRouter;
