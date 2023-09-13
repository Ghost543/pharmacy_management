import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/server/prisma";
import { employeeLoginDto } from "@/dtos/employeeLoginDto.dto";
import { verify } from "argon2";
import { RoleSelectorRev } from "@/utils/roleSelector";

export const authOptions: NextAuthOptions = {
    secret: "fKKma7ND5HXNkWGtFxocQRJ+G0RhCkRwQLsBjyOBqyI=",
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const cred = await employeeLoginDto.parseAsync(credentials);
                const employee = await prisma.employee.findFirst({
                    where: { name: cred.username },
                });

                if (!employee) {
                    return null;
                }

                const isValidPassword = await verify(
                    employee.password,
                    cred.password
                );

                if (!isValidPassword) {
                    return null;
                }
                return {
                    name: employee.name,
                    id: employee.id,
                    role: RoleSelectorRev(employee.role),
                    email: employee.contact.email,
                    tel: employee.contact.tel,
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.tel = user.tel;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id;
                session.user.tel = token.tel;
                session.user.role = token.role;
            }
            return session;
        },
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
        // async encode() {},
        // async decode() {}
    },
};

export default NextAuth(authOptions);
