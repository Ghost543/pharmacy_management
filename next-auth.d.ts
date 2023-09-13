import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { Role } from "@/Components/workersComponents/Roles";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: Role;
            tel: string;
        } & DefaultUser;
    }
    interface User extends DefaultUser {
        id: string;
        role: Role;
        tel: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string;
        role: Role;
        tel: string;
    }
}
