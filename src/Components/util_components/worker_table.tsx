import React, {FC, useState} from 'react';
import { WorkerTableType } from "@/Components/workersComponents/workerTableType";
import {OrderStatus} from "@/Components/ordersComponents/orderStatus";
import {Role, WorkerStatus} from "@/Components/workersComponents/Roles";
import {PiDotsThreeVertical} from "react-icons/pi";
import {useWorkersContext} from "@/context/useWorkersContext";

export const WorkerTable: FC<{ body: WorkerTableType[] }> = ({ body }) => {
    const [toggle, setToggle] = useState<number|null>();
    const { changeWorker,changeDrawer } = useWorkersContext();
    const toggleHandler = (i:number, e: React.MouseEvent<HTMLLIElement>) => {
        // e.currentTarget.querySelector("input[type='radio']").attributes + "checked"

        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        // console.log(children)

        for (let col=0; col < children.length; col++){
            children[col].children[1].className = `max-h-0 overflow-hidden`;
        }


        if (i===toggle) {
            e.currentTarget.children[1].className=`max-h-0 overflow-hidden`;
            setToggle(null);
            return;
        }
        e.currentTarget.children[1].className=`max-h-fit w-full `;
        setToggle(i);
    };
    const toggleRight = (e: React.MouseEvent<HTMLSpanElement>, worker: WorkerTableType) => {
        console.log("toggle");
        changeDrawer(true);
        changeWorker(worker);
    };

    const roleSelector = (role: Role) => {
        switch (role) {
            case Role.Admin:
                return {name: "Admin", style: "bg-gray-400/20 text-gray-400 ring-1 ring-gray-500"}
            case Role.Manager:
                return {name: "Manager", style: "bg-rose-400/20 text-rose-500 ring-1 ring-rose-500"}
            case Role.Cashier:
                return {name: "Cashier", style: "bg-sky-400/20 text-sky-500 ring-1 ring-sky-500"}
            case Role.Sales:
                return {name: "Sales", style: "bg-emerald-400/20 text-emerald-500 ring-1 ring-emerald-500"}
        };
    };
    const statusSelector = (status: WorkerStatus) => {
        switch (status) {
            case WorkerStatus.online:
                return {name: "Online", style: "bg-sky-400/20 text-sky-500 ring-1 ring-sky-500"}
            case WorkerStatus.offline:
                return {name: "Offline", style: "bg-rose-400/20 text-rose-500 ring-1 ring-rose-500"}

        };
    };


    return (
        <div className={`w-full h-auto flex flex-col gap-2 text-gray-400 text-sm`}>
            <div className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 text-gray-500 p-3 shadow-md`}>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Worker</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Role</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Salary</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Status</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Last seen</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}></span>
            </div>
            <ul className={`w-full max-h-fit flex flex-col gap-2`}>
                {
                    body.map((row, i) => (
                        <li
                            onClick={(e) => toggleHandler(i,e)}
                            key={ i } className={`w-full max-h-fit flex flex-col shadow-md hover:shadow-sm`}>
                            <div className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 p-3 gap-4 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <span
                                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                    <p>{ row.name }</p>
                                </span>
                                <span
                                    className={`w-full max-h-fit flex flex-row justify-center items-center `}>
                                    <p className={`w-fit h-fit px-1 rounded-md ${ roleSelector(row.role).style }`}>{ roleSelector(row.role).name }</p>
                                </span>
                                <span
                                    className={`w-full max-h-fit flex flex-row justify-center gap-1 items-center`}>
                                    { row.salary } <span className={`text-xs text-gray-600`}> ugx</span>
                                </span>
                                <span
                                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                    <p className={`w-fit text-xs h-fit px-1 rounded-full ${ statusSelector(row.status).style }`}>{ statusSelector(row.status).name }</p>
                                </span>

                                <span
                                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                    <span className={`w-fit h-auto flex flex-col justify-center items-center`}>
                                        <p>{ row.last_seen.date }</p>
                                        <p className={`self-start text-xs text-gray-600`}>{ row.last_seen.time }</p>
                                    </span>
                                </span>
                                <span
                                    onClick={(e) => toggleRight(e, row)}
                                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                    <PiDotsThreeVertical className={`cursor-pointer text-gray-400 text-3xl hover:text-sky-600`}/>
                                </span>

                            </div>
                            <div className={`max-h-0 overflow-hidden`}>
                                <div className={`w-full h-fit p-2 flex flex-col gap-2 text-xs text-gray-400`}>
                                    {
                                        row.name
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
