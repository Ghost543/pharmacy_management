import React, {FC, useEffect, useState} from 'react';
import { El_Messiri, Inconsolata, Teko } from "next/font/google";
import { Role, WorkerStatus } from "@/Components/workersComponents/Roles";
import { WorkerTableType } from "@/Components/workersComponents/workerTableType";
import { PiPerson } from "react-icons/pi";
import { MdPersonAdd } from "react-icons/md";
import {IoAddSharp, IoSearchSharp} from "react-icons/io5";
import {StockModalTable} from "@/Components/util_components/stock_modal_table";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {WorkerTable} from "@/Components/util_components/worker_table";
import {WorkerDrawer} from "@/Components/workersComponents/workerDrawer";
import {useWorkersContext} from "@/context/useWorkersContext";

const inconsolata = Inconsolata({
    weight: ["200", "400", "500", "700", "900"],
    subsets: ['latin']
});

const teko = Teko({
    weight: ["300", "400", "500", "700"],
    subsets: ['latin']
});

const elMessiri = El_Messiri({
    weight: ["400", "500", "700"],
    subsets: ['latin']
});

const workers: WorkerTableType[] = [
    {
        name: "Jone Doe",
        role: Role.Cashier,
        status: WorkerStatus.offline,
        salary: "800,000",
        contact: {
            tel: "+256770535474",
            email: "jone@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "Simon Doe",
        role: Role.Manager,
        status: WorkerStatus.online,
        salary: "4,000,000",
        contact: {
            tel: "+256770535474",
            email: "simon@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "Kamoga Doe",
        role: Role.Admin,
        status: WorkerStatus.online,
        salary: " ",
        contact: {
            tel: "+256770535474",
            email: "kamoga@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "Spice Doe",
        role: Role.Sales,
        status: WorkerStatus.offline,
        salary: "800,000",
        contact: {
            tel: "+256770535474",
            email: "spice@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "kim Doe",
        role: Role.Cashier,
        status: WorkerStatus.offline,
        salary: "800,000",
        contact: {
            tel: "+256770535474",
            email: "kim@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "Kate Doe",
        role: Role.Sales,
        status: WorkerStatus.online,
        salary: "800,000",
        contact: {
            tel: "+256770535474",
            email: "jone@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },{
        name: "Molly Doe",
        role: Role.Manager,
        status: WorkerStatus.offline,
        salary: "800,000",
        contact: {
            tel: "+256770535474",
            email: "molly@pharma.com"
        },
        last_seen: {
            date: "12/08/2023",
            time: "11:46"
        }
    },
];

export const WorkersLayout:FC<{ data: string }> = ( { data } ) => {

    const [workerTab, setWorkerTab] = useState<string>("all");
    const [tabWorkers, setTabWorkers] = useState(workers);
    const [modal, setModal] = useState<boolean>(false);
    const { drawer } = useWorkersContext();
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    useEffect(()=>{
        if (workerTab === "all") {
            setTabWorkers(workers);
        }
        if (workerTab === "online") {
            setTabWorkers(workers.filter(w => w.status === WorkerStatus.online));
        }
        if (workerTab === "offline") {
            setTabWorkers(workers.filter(w => w.status === WorkerStatus.offline));
        }
    },[workerTab]);


    return (
        <div className={`w-full min-h-screen flex flex-col gap-2 ${inconsolata.className} relative`}>
            {/*{ data }*/}
            <div className={`w-full max-h-fit flex flex-row p-4 gap-2 justify-between items-center`}>
                <div className={`w-1/2 max-h-fit flex flex-row justify-start items-center`}>
                    <PiPerson className={`text-3xl text-gray-500`}/>
                    <h3 className={`text-2xl font-bold text-gray-400`}>
                        Workers
                    </h3>
                </div>
                <div className={`w-1/2 max-h-fit flex flex-row justify-end items-center`}>
                    <span
                        onClick={ () => openModal() }
                        className={`p-2 flex max-w-fit h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        <MdPersonAdd className={ `text-lg text-gray-400` } /> Add Worker
                    </span>
                    {
                        modal &&
                        <div className={`absolute right-2 top-0  bg-gray-900/20 w-full h-full flex flex-row justify-center gap-2 items-center`}>
                            <div className={`w-4/5 max-h-fit flex flex-col gap-2 p-2 rounded-md shadow-2xl bg-gray-900/60`}>
                                <div className={`w-full max-h-fit flex flex-row justify-between items-center `}>
                                    <div className={`w-4/5 max-h-fit flex flex-col gap-2.5 p-2`}>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="text" name={`customer`} placeholder="Worker's Name"/>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="email" name={`email`} placeholder="Email Address"/>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="tel" name={`telephone`} placeholder="Telephone"/>
                                    </div>

                                </div>
                                <div className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                                        <span
                                            onClick={ () => closeModal() }
                                            className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                                Cancel
                                        </span>
                                    <span
                                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                                Add Worker
                                        </span>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
            <div className={`w-full max-h-fit flex shadow flex-row justify-end items-center p-4 bg-gray-800/40  gap-2`}>
                <select name="status" className={`bg-transparent ring-1 ring-gray-500 w-36 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-gray-300 focus:outline-none`}>
                    <option value="all">Roles</option>
                    <option value="admin">Admin</option> {/* Gray */}
                    <option value="manager">Manager</option> {/* Rose */}
                    <option value="cashier">Cashier</option> {/* Blue */}
                    <option value="sales">Sales</option> {/* Emerald */}
                </select>
                <input
                    type={"date"}
                    name={`date`}
                    placeholder={`Date Range`}
                    className={`bg-transparent w-36 h-6 placeholder:font-medium placeholder-gray-600 ring-1 ring-gray-500 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-gray-300 focus:outline-none`}/>
                <div className={`w-fit  max-h-fit flex flex-row items-center gap-2 ring-1 ring-gray-500 pr-2`}>
                    <input
                        type={"text"}
                        name={`search`}
                        className={`bg-transparent w-36 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        placeholder="Search for worker" />
                    <IoSearchSharp className={`text-gray-600`}/>
                </div>
            </div>
            <div className={`w-full max-h-fit bg-gray-800/40 flex flex-col gap-2 p-2`}>
                <ul className={`w-full max-h-fit flex flex-row justify-start gap-2 text-gray-400 text-base shadow`}>
                    <li
                        onClick={() => setWorkerTab("all")}
                        className={`w-fit h-fit p-2  pb-0 cursor-pointer ${ workerTab === "all" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>All</li>
                    <li
                        onClick={() => setWorkerTab("online")}
                        className={`w-fit max-h-fit flex flex-row gap-2 justify-center items-center p-2 pb-0 cursor-pointer ${ workerTab === "online" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>
                        <span className={`relative flex h-2 w-2`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75 rounded-full`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 bg-sky-500`}></span>
                        </span> Online
                    </li>
                    <li
                        onClick={() => setWorkerTab("offline")}
                        className={`w-fit max-h-fit flex flex-row gap-1 justify-center items-center p-2 pb-0 cursor-pointer ${ workerTab === "offline" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>
                        <span className={`relative flex h-2 w-2`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full bg-rose-400 opacity-75 rounded-full`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 bg-rose-500`}></span>
                        </span> Offline
                    </li>
                </ul>
                <div>
                    <WorkerTable body={ tabWorkers } />
                </div>
                <div className={`absolute w-1/3 h-screen top-0 right-0 p-2 ${ drawer ? "" : "hidden overflow-hidden" }`}>
                    <WorkerDrawer />
                </div>
            </div>
        </div>
    );
};
