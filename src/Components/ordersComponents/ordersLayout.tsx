import React, {FC, useEffect, useState} from 'react';
import {El_Messiri, Inconsolata, Teko} from "next/font/google";
import {IoAddSharp, IoSearchSharp} from "react-icons/io5";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {OrderStatus} from "@/Components/ordersComponents/orderStatus";
import {log} from "util";
import {OrderTableType} from "@/Components/ordersComponents/orderTableType";
import {OrdersTable} from "@/Components/util_components/orders_table";
import {StockModalTable} from "@/Components/util_components/stock_modal_table";

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



const orders: OrderTableType[] = [
    {
        order_no: "O0000000034",
        customer: "Jone Doe",
        status: OrderStatus.Booked,
        amount: "600,000,000",
        date_time: {
            time: "13:00",
            date: "23/04/2023"
        },
        orders: [
            {
                serial_no: "6188522935001",
                item: "Paracetamol",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            },
            {
                serial_no: "6188522935004",
                item: "Hedex",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            }
        ]
    },
    {
        order_no: "O000000004",
        customer: "Jone Doe",
        status: OrderStatus.Returned,
        amount: "1,000,000,000",
        date_time: {
            time: "13:45",
            date: "23/04/2023"
        },
        orders: [
            {
                serial_no: "6188522935001",
                item: "Paracetamol",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            },
            {
                serial_no: "6188522935004",
                item: "Hedex",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            }
        ]
    },
    {
        order_no: "O000000005",
        customer: "Jone Doe",
        status: OrderStatus.Taken,
        amount: "1,000,000,000",
        date_time: {
            time: "13:45",
            date: "23/04/2023"
        },
        orders: [
            {
                serial_no: "6188522935001",
                item: "Paracetamol",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            },
            {
                serial_no: "6188522935004",
                item: "Hedex",
                quantity: 3,
                unit_price: "2,500",
                total_price: "7,500"
            }
        ]
    }
];

const headers = ["Order No", "Customer", "Quantity", "Status", "Amount", "Date/Time"];

export const OrdersLayout:FC<{ data: string }> = ( { data } ) => {

    const [orderTab, setOrderTab] = useState<string>("all");
    const [tabOrders, setTabOrders] = useState(orders);
    const [modal, setModal] = useState<boolean>(false);
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    useEffect(()=>{
        if (orderTab === "all") {
            setTabOrders(orders);
        }
        if (orderTab === "returned") {
            setTabOrders(orders.filter(o => o.status === OrderStatus.Returned));
        }
        if (orderTab === "taken") {
            setTabOrders(orders.filter(o => o.status === OrderStatus.Taken));
        }
    },[orderTab]);

    return (
        <div className={`w-full min-h-screen flex flex-col gap-2 ${inconsolata.className} relative`}>
            {/*{ data }*/}
            <div className={`w-full max-h-fit flex flex-row p-4 gap-2 justify-between items-center`}>
                <div className={`w-1/2 max-h-fit flex flex-row justify-start items-center`}>
                    <h3 className={`text-2xl font-bold text-gray-400 `}>Orders</h3>
                </div>
                <div className={`w-1/2 max-h-fit flex flex-row justify-end items-center`}>
                    <span
                        onClick={ () => openModal() }
                        className={`p-2 flex max-w-fit h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        <IoAddSharp className={ `text-lg text-gray-400` } /> Create Order
                    </span>

                    {
                        modal &&
                        <div className={`absolute right-2 top-0  bg-gray-900/20 w-full h-full flex flex-row justify-center gap-2 items-center`}>
                            <div className={`w-4/5 max-h-fit flex flex-col gap-2 p-2 rounded-md shadow-2xl bg-gray-900/60`}>
                                <div className={`w-full max-h-fit flex flex-row justify-between items-center `}>
                                    <div className={`w-4/5 max-h-fit flex flex-col gap-2.5 p-2`}>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="text" name={`customer`} placeholder="Customer's Name"/>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="email" name={`email`} placeholder="Email Address"/>
                                        <input className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`} type="tel" name={`telephone`} placeholder="Telephone"/>
                                    </div>
                                    <div className={`w-1/5 max-h-fit flex flex-row justify-end items-center`}>
                                            <span
                                                className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                                <IoAddSharp className={ `text-lg text-gray-400` } /> Add item
                                            </span>
                                    </div>
                                </div>

                                <StockModalTable />
                                <div className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                                        <span
                                            onClick={ () => closeModal() }
                                            className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                                Cancel
                                        </span>
                                    <span
                                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                                Add Order
                                        </span>
                                </div>
                            </div>
                        </div>

                    }

                </div>
            </div>

            <div className={`w-full max-h-fit flex shadow flex-row justify-end items-center p-4 bg-gray-800/40  gap-2`}>
                <select name="status" className={`bg-transparent ring-1 ring-gray-500 w-36 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-gray-300 focus:outline-none`}>
                    <option value="all">Status</option>
                    <option value="pending">Pending</option>
                    <option value="taken">Taken</option>
                    <option value="booked">Booked</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="returned">Returned</option>
                </select>
                <input
                    type={"date"}
                    placeholder={`Date Range`}
                    className={`bg-transparent w-36 h-6 placeholder:font-medium placeholder-gray-600 ring-1 ring-gray-500 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-gray-300 focus:outline-none`}/>
                <div className={`w-fit  max-h-fit flex flex-row items-center gap-2 ring-1 ring-gray-500 pr-2`}>
                    <input
                        type={"text"}
                        className={`bg-transparent w-36 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        placeholder="Search for items" />
                    <IoSearchSharp className={`text-gray-600`}/>
                </div>
            </div>
            <div className={`w-full max-h-fit bg-gray-800/40 flex flex-col gap-2 p-2`}>
                <ul className={`w-full max-h-fit flex flex-row justify-start gap-2 text-gray-400 text-base shadow`}>
                    <li
                        onClick={() => setOrderTab("all")}
                        className={`w-fit h-fit p-2  pb-0 cursor-pointer ${ orderTab === "all" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>All</li>
                    <li
                        onClick={() => setOrderTab("taken")}
                        className={`w-fit max-h-fit flex flex-row gap-1 justify-center items-center p-2 pb-0 cursor-pointer ${ orderTab === "taken" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>
                        <BiRightArrowAlt /> Taken
                    </li>
                    <li
                        onClick={() => setOrderTab("returned")}
                        className={`w-fit max-h-fit flex flex-row gap-1 justify-center items-center p-2 pb-0 cursor-pointer ${ orderTab === "returned" ? "text-blue-500 shadow-blue-600/70 shadow-sm" : "" }`}>
                        <BiLeftArrowAlt /> Returned
                    </li>
                </ul>
                <div>
                    <OrdersTable headers={headers} body={tabOrders} />
                </div>
                <div></div>

            </div>
        </div>
    );
};
