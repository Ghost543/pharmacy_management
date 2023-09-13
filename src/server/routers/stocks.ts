import { protectedProcedure, publicProcedure, router } from "@/server/trpc";
import { addStockDto } from "@/dtos/addStockDto.dto";
import { RoleSelector } from "@/utils/roleSelector";
import { TRPCError } from "@trpc/server";
import _ from "lodash";
import { StockData } from "@/outputTypes/stock";

export const stockRouter = router({
    all: publicProcedure.query(async opts => {
        try {
            let stocks = await opts.ctx.prisma.stock.findMany({
                include: {
                    items: true,
                    supplier: true,
                },
            });
            let stock: StockData[] = stocks.map(stock => ({
                id: stock.id,
                stock_no: stock.stock_no,
                quantity: stock.quantity,
                no_items: stock.no_items,
                cost: stock.cost,
                date: stock.date,
                distributor:
                    stock.supplier === null ? "" : stock.supplier.company_name,
                items: stock.items.map(item =>
                    _.omit(item, ["orderId", "stockId"])
                ),
            }));
            return stock;
        } catch (e) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Something went wrong",
            });
        }
    }),
    add: protectedProcedure
        .input(addStockDto)
        .use(opts => {
            console.log(RoleSelector(opts.ctx.session?.user?.role));
            if (
                RoleSelector(opts.ctx.session?.user?.role) !== "Admin" &&
                RoleSelector(opts.ctx.session?.user?.role) !== "Manager"
            ) {
                throw new TRPCError({
                    code: "UNAUTHORIZED",
                    message: `${opts.ctx.session?.user?.name} is not either an Admin or Manager`,
                });
            }
            return opts.next();
        })
        .mutation(async opts => {
            try {
                const result = await opts.ctx.prisma.stock.create({
                    data: {
                        stock_no: opts.input.stock_no,
                        cost: opts.input.cost,
                        items: {
                            createMany: {
                                data: [...opts.input.items],
                            },
                        },
                        supplier: {
                            connectOrCreate: {
                                where: {
                                    company_name: opts.input.distributor.name
                                        .trim()
                                        .toUpperCase(),
                                },
                                create: {
                                    company_name: opts.input.distributor.name
                                        .trim()
                                        .toUpperCase(),
                                    contact: {
                                        tel: opts.input.distributor.tel,
                                        email: opts.input.distributor.email,
                                    },
                                    address: opts.input.distributor.address,
                                    agent: {
                                        name: opts.input?.distributor?.agent
                                            ?.name,
                                        contact: {
                                            tel: opts.input?.distributor?.agent
                                                ?.tel,
                                            email: opts.input?.distributor
                                                ?.agent?.email,
                                        },
                                    },
                                },
                            },
                        },
                        recieving_employee: {
                            connect: {
                                id: opts.ctx.session?.user?.id,
                            },
                        },
                        no_items: opts.input.items.length,
                        quantity: opts.input.items.reduce((acc, curr, i) => {
                            return acc + curr.quantity;
                        }, 0),
                    },
                    include: {
                        recieving_employee: true,
                        items: true,
                        supplier: true,
                    },
                });
                const stock: StockData = {
                    id: result.id,
                    stock_no: result.stock_no,
                    cost: result.cost,
                    date: result.date,
                    distributor:
                        result.supplier === null
                            ? ""
                            : result.supplier.company_name,
                    items: result.items.map(item =>
                        _.omit(item, ["orderId", "stockId"])
                    ),
                    no_items: result.no_items,
                    quantity: result.quantity,
                };
                return stock;
            } catch (e) {
                if (
                    e instanceof
                    opts.ctx.prismaNameSpace.PrismaClientKnownRequestError
                ) {
                    if (e.code === "P2002") {
                        console.log("There is a unique constraint violated");
                        throw e;
                    }
                }
                console.log(e);
                throw e;
            }
        }),
});
