import { publicProcedure, router } from "@/server/trpc";
import { employeeLoginDto } from "@/dtos/employeeLoginDto.dto";

export const loginRouter = router({
    login: publicProcedure.input(employeeLoginDto).mutation(async opts => {
        let user;
    }),
});
