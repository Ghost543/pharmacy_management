import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";
import { prisma, prismaNameSpace } from "@/server/prisma";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function createContext(ctxOptions: CreateNextContextOptions) {
    // const req = ctxOptions?.req;
    // const res = ctxOptions?.res;
    const session = await getServerSession(
        ctxOptions.req,
        ctxOptions.res,
        authOptions
    );

    console.log(session);

    return {
        session,
        req: ctxOptions.req,
        res: ctxOptions.res,
        prisma,
        prismaNameSpace,
    };
}

export type ContextT = inferAsyncReturnType<typeof createContext>;
