import { initTRPC, TRPCError } from "@trpc/server";
import { ContextT } from "@/server/context";
import superjson from "superjson";

const t = initTRPC.context<ContextT>().create({
    transformer: superjson,
});

const isAuthed = t.middleware(({ next, ctx }) => {
    console.log(ctx.session);
    if (!ctx.session?.user?.name) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: `${ctx.session?.user?.name} is not authorised`,
        });
    }
    return next({
        ctx: {
            session: ctx.session,
            prisma: ctx.prisma,
            prismaNameSpace: ctx.prismaNameSpace,
        },
    });
});
// const isAuthed = t.middleware(({next, ctx}) => {
//     if (!ctx.session?.user?.name) {
//         throw new TRPCError({
//             code: "UNAUTHORIZED",
//         });
//     }
//     return next({
//         ctx: {
//             session: ctx.session,
//             prisma: ctx.prisma,
//             prismaNameSpace: ctx.prismaNameSpace,
//         }
//     });
// });

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
