import { publicProcedure, router } from "@/server/trpc";
import { addEmployeeDtoDto } from "@/dtos/addEmployeeDto.dto";
import { employeeStatusSelector, RoleSelector } from "@/utils/roleSelector";
import { editEmployeeDtoDto } from "@/dtos/editEmployeeDto.dto";
import { employeeLoginDto } from "@/dtos/employeeLoginDto.dto";
import { hash } from "argon2";

export const employeeRouter = router({
    all: publicProcedure.query(async opts => {
        return await opts.ctx.prisma.employee.findMany({
            include: {
                stock: true,
                orders: true,
                sales: true,
                invoices: true,
            },
        });
    }),
    add: publicProcedure.input(addEmployeeDtoDto).mutation(async opts => {
        try {
            const hashPassword = await hash(opts.input.password);
            await opts.ctx.prisma.employee.create({
                data: {
                    name: opts.input.name,
                    age: opts.input.age,
                    contact: {
                        tel: opts.input.tel,
                        email: opts.input.email,
                    },
                    salary: opts.input.salary,
                    password: hashPassword,
                    role: RoleSelector(opts.input.role),
                },
            });
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
            throw e;
        }
    }),
    edit: publicProcedure.input(editEmployeeDtoDto).mutation(async opts => {
        try {
            await opts.ctx.prisma.employee.update({
                where: { id: opts.input.id },
                data: {
                    name: opts.input.name,
                    age: opts.input.age,
                    contact: {
                        tel: opts.input.tel,
                        email: opts.input.email,
                    },
                    salary: opts.input.salary,
                    status: employeeStatusSelector(opts.input.status),
                    role: RoleSelector(opts.input.role),
                },
            });
        } catch (e) {
            throw e;
        }
    }),
    // login: publicProcedure.input(employeeLoginDtoDto).query(async opts => {
    //     try {
    //         const employee = await opts.ctx.prisma.employee.findUniqueOrThrow({
    //             where: {name: opts.input.name}
    //         });
    //         if (employee.password !== opts.input.password) {
    //             return new Error("Invalid credentials");
    //         }
    //         return employee;
    //
    //     } catch (e) {
    //         throw e;
    //     }
    // }),
});
