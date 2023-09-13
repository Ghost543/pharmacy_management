import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Role } from "@/Components/workersComponents/Roles";
import { trpc } from "@/utils/trpc";
import { RoleSelector, RoleSelectorRev } from "@/utils/roleSelector";

const CreateEmployee = () => {
    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<Role>(Role.Admin);
    const [password, setPassword] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [salary, setSalary] = useState<number>(0);
    const [tel, setTel] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const router = useRouter();
    const mutation = trpc.employee.add.useMutation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate({ name, role, age, password, tel, email, salary });
        if (mutation.isSuccess) {
            router.replace("/auth/signin");
            return;
        }
        // setError(mutation.error.message);
        // console.log(mutation.error);
        // return;
    };

    return (
        <div
            className={`w-full h-screen flex flex-row justify-center items-center`}>
            <div
                className={`w-1/3 h-auto bg-gray-800/40 flex flex-col p-2 gap-1`}>
                {mutation.isError && <div>{error}</div>}

                <form
                    onSubmit={submitHandler}
                    className={`w-full h-fit p-2 flex flex-col gap-2 justify-center items-center`}>
                    <input
                        placeholder={"username"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500  border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={name}
                        type={"text"}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder={"email"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500 border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={email}
                        type={"email"}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <select
                        value={RoleSelector(role)}
                        onChange={e => setRole(RoleSelectorRev(e.target.value))}
                        name="role"
                        className={`bg-transparent ring-1 ring-gray-500 w-full h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-gray-300 focus:outline-none`}>
                        <option value="Admin">Admin</option> {/* Gray */}
                        <option value="Manager">Manager</option> {/* Rose */}
                        <option value="Cashier">Cashier</option> {/* Blue */}
                        <option value="Sales">Sales</option> {/* Emerald */}
                    </select>
                    <input
                        placeholder={"Age"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500 border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={age}
                        type={"number"}
                        onChange={e => setAge(parseInt(e.target.value))}
                    />
                    <input
                        placeholder={"Salary"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500 border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={salary}
                        type={"number"}
                        onChange={e => setSalary(parseInt(e.target.value))}
                    />
                    <input
                        placeholder={"password"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500 border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        placeholder={"telephone number"}
                        className={`w-full text-sm text-gray-400 bg-transparent ring-1 ring-gray-500 border-0 focus:ring-1 focus:ring-gray-500 focus:border-0 p-2`}
                        value={tel}
                        type={"tel"}
                        onChange={e => setTel(e.target.value)}
                    />

                    <input
                        className={`p-2 flex w-28 h-9 self-end shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}
                        value={"Sign up"}
                        type={"submit"}
                    />
                </form>
            </div>
        </div>
    );
};

export default CreateEmployee;
