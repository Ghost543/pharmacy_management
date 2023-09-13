import { PrismaClient, Prisma } from "@prisma/client";
import { env } from "@/server/env";

const prismaGlobal = global as typeof global & {
    prisma?: PrismaClient;
};

export const prisma: PrismaClient =
    prismaGlobal.prisma ??
    new PrismaClient({
        log:
            env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

export const prismaNameSpace = Prisma;

if (env.NODE_ENV !== "production") {
    prismaGlobal.prisma = prisma;
}
