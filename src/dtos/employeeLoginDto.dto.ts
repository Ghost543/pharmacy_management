import { z } from "zod";

export const employeeLoginDto = z.object({
    username: z.string(),
    password: z.string(),
});
