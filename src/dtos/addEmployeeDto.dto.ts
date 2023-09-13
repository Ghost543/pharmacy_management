import { z } from "zod";
import { Role, WorkerStatus } from "@/Components/workersComponents/Roles";
export const addEmployeeDtoDto = z.object({
    name: z.string(),
    role: z.nativeEnum(Role),
    age: z.number(),
    // status: z.nativeEnum(WorkerStatus),
    password: z.string().min(8),
    tel: z.string(),
    email: z.string().email("Its an invalid input"),
    salary: z.number(),
    // start_date: z.date().optional()
});
