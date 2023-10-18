import { protectedProcedure, publicProcedure, router } from "@/server/trpc";
import { createOrderDto } from "@/dtos/createOrderDto.dto";
import { createdOrderOutput } from "@/outputTypes/order";
import { RoleSelector } from "@/utils/roleSelector";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { OrderStatus } from "@/Components/ordersComponents/orderStatus";
import { statusSelector, statusSelectorRev } from "@/utils/orderStatusSelector";

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
    addOrder: protectedProcedure
        .input(createOrderDto)
        .use(opts => {
            console.log(RoleSelector(opts.ctx.session?.user?.role));
            if (
                RoleSelector(opts.ctx.session?.user?.role) !== "Admin" &&
                RoleSelector(opts.ctx.session?.user?.role) !== "Manager" &&
                RoleSelector(opts.ctx.session?.user?.role) !== "Sales"
            ) {
                throw new TRPCError({
                    code: "UNAUTHORIZED",
                    message: `${opts.ctx.session?.user?.name} is not either an Admin or Manager`,
                });
            }
            return opts.next();
        })
        // .output(createdOrderOutput)
        .mutation(async opts => {
            try {
                const result = await opts.ctx.prisma.$transaction(async tx => {
                    for (const item of opts.input.items) {
                        await tx.item.update({
                            where: {
                                id: item.itemId,
                            },
                            data: {
                                quantity: {
                                    decrement: item.quantity,
                                },
                            },
                        });
                    }

                    const order = await tx.order.create({
                        data: {
                            order_no: opts.input.order_no,
                            quantity: opts.input.items.reduce((acc, cur, i) => {
                                return acc + cur.quantity;
                            }, 0),
                            amount: opts.input.items.reduce((acc, cur, i) => {
                                return acc + cur.quantity * cur.cost;
                            }, 0),
                            client: {
                                connectOrCreate: {
                                    where: {
                                        name: opts.input.client.name,
                                    },
                                    create: {
                                        name: opts.input.client.name,
                                        contact: {
                                            tel: opts.input?.client?.tel,
                                            email: opts.input?.client?.email,
                                        },
                                        company: {
                                            name: opts.input?.client?.company
                                                ?.name,
                                            address:
                                                opts.input?.client?.company
                                                    ?.address,
                                            contact: {
                                                tel: opts.input.client?.company
                                                    ?.tel,
                                                email: opts.input.client
                                                    ?.company?.email,
                                            },
                                        },
                                    },
                                },
                            },
                            items: {
                                connect: [
                                    ...opts.input.items.map(item => {
                                        return { id: item.itemId };
                                    }),
                                ],
                            },
                            employee: {
                                connect: { id: opts.ctx.session?.user?.id },
                            },
                        },
                        include: {
                            items: true,
                            employee: true,
                            client: true,
                        },
                    });
                    return order;
                });
                return {
                    id: result.id,
                };
            } catch (e) {
                if (
                    e instanceof
                    opts.ctx.prismaNameSpace.PrismaClientKnownRequestError
                ) {
                    if (e.code === "P2002") {
                        console.log("There is a unique constraint violated");
                        throw new TRPCError({
                            code: "CONFLICT",
                            message: e.message,
                        });
                    }
                }
                console.log(e);
                throw e;
            }
        }),
    updateOrderStatus: protectedProcedure
        .input(
            z.object({
                id: z.string(),
                order_no: z.string(),
                status: z.nativeEnum(OrderStatus),
            })
        )
        .mutation(async opts => {
            try {
                await opts.ctx.prisma.order.update({
                    where: {
                        id: opts.input.id,
                    },
                    data: {
                        status: statusSelector(opts.input.status),
                    },
                });
                return {
                    message: `Order ${
                        opts.input.order_no
                    }'s status changed to ${statusSelector(opts.input.status)}`,
                };
            } catch (e) {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Something went wrong",
                });
                console.log(e);
            }
        }),
});
