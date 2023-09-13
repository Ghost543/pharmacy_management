import { z } from "zod";
import { Role, WorkerStatus } from "@/Components/workersComponents/Roles";

export const editEmployeeDtoDto = z.object({
    id: z.string(),
    name: z.string(),
    role: z.nativeEnum(Role),
    age: z.number(),
    status: z.nativeEnum(WorkerStatus),
    tel: z.string(),
    email: z.string().email("Its an invalid input"),
    salary: z.number(),
    // start_date: z.date().optional()
});
