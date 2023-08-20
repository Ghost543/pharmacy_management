import React, {FC} from 'react';
import {FaUserCircle} from "react-icons/fa";
import {useWorkersContext} from "@/context/useWorkersContext";
import {Role} from "@/Components/workersComponents/Roles";

export const WorkerDrawer:FC = () => {
    const { changeDrawer,worker } = useWorkersContext();
    return (
        <div className={`w-full h-full bg-gray-900/50 rounded-md flex flex-col justify-between p-2`}>
            <div className={`w-full max-h-fit flex flex-col items-end gap-1 p-2`}>
                <div className={`w-fit h-fit`}>
                    <FaUserCircle className={`text-8xl cursor-pointer`}/>
                </div>
                <div className={`w-full h-fit flex flex-row justify-end`}>
                    <input

                        className={`w-24 text-sm text-gray-400 bg-transparent ring-0 border-0 focus:ring-0 focus:border-0 p-0`}
                        type={"text"}
                        name={`name`}
                        value={worker === undefined ? "" : worker.name}
                    /> 

                    <select
                        name="status"
                            className={`bg-transparent appearance-none w-24 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}>
                        <option value="all" selected={worker === undefined}>All</option>
                        <option value="admin" selected={!(worker === undefined || worker.role !== Role.Admin)}>Admin</option> {/* Gray */}
                        <option value="manager" selected={!(worker === undefined || worker.role !== Role.Manager)}>Manager</option> {/* Rose */}
                        <option value="cashier" selected={!(worker === undefined || worker.role !== Role.Cashier)}>Cashier</option> {/* Blue */}
                        <option value="sales" selected={!(worker === undefined || worker.role !== Role.Sales)}>Sales</option> {/* Emerald */}
                    </select>
                </div>
                <div className={`w-full h-fit flex flex-row justify-end`}>
                    <input

                        className={`w-32 text-sm text-gray-400 bg-transparent ring-0 border-0 focus:ring-0 focus:border-0 p-0`}
                        type={"email"}
                        name={`email`}
                        value={worker === undefined ? "" : worker.contact.email}
                    />
                    <input

                        className={`w-28 text-sm text-gray-400 bg-transparent ring-0 border-0 focus:ring-0 focus:border-0 p-0`}
                        type={"tel"}
                        name={`tel`}
                        value={worker === undefined ? "" : worker.contact.tel}
                    />
                </div>
            </div>
            <div>

            </div>
            <div className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                <span
                    onClick={ () => changeDrawer(false) }
                    className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                    Cancel
                </span>
                <span
                    className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        Ok
                </span>
            </div>
        </div>
    );
}
