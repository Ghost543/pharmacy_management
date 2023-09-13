import React, { FC, useState } from "react";
// import classes from "*.module.sass";

import classes from "./table.module.css";
import { OrderTableType } from "@/Components/ordersComponents/orderTableType";
import { OrderStatus } from "@/Components/ordersComponents/orderStatus";

export const OrdersTable: FC<{ headers: string[]; body: OrderTableType[] }> = ({
    headers,
    body,
}) => {
    const [toggle, setToggle] = useState<number | null>();
    const grids = `grid-cols-${headers.length > 0 ? headers.length : "none"}`;

    const toggleHandler = (i: number, e: React.MouseEvent<HTMLLIElement>) => {
        // e.currentTarget.querySelector("input[type='radio']").attributes + "checked"

        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        // console.log(children)

        for (let col = 0; col < children.length; col++) {
            children[col].children[1].className = `max-h-0 overflow-hidden`;
        }

        if (i === toggle) {
            e.currentTarget.children[1].className = `max-h-0 overflow-hidden`;
            setToggle(null);
            return;
        }
        e.currentTarget.children[1].className = `max-h-fit w-full `;
        setToggle(i);
    };
    const statusSelector = (status: OrderStatus) => {
        switch (status) {
            case OrderStatus.Taken:
                return {
                    name: "Taken",
                    style: "bg-emerald-400/20 text-emerald-500 ring-1 ring-emerald-500",
                };
            case OrderStatus.Booked:
                return {
                    name: "Booked",
                    style: "bg-amber-400/20 text-amber-500 ring-1 ring-amber-500",
                };
            case OrderStatus.Returned:
                return {
                    name: "Returned",
                    style: "bg-gray-400/20 text-gray-400 ring-1 ring-gray-500",
                };
            case OrderStatus.Pending:
                return {
                    name: "Pending",
                    style: "bg-sky-400/20 text-sky-500 ring-1 ring-sky-500",
                };
            case OrderStatus.Cancelled:
                return {
                    name: "Cancelled",
                    style: "bg-rose-400/20 text-rose-500 ring-1 ring-rose-500",
                };
        }
    };
    return (
        <div
            className={`w-full h-auto flex flex-col gap-2 text-gray-400 text-sm`}>
            <div
                className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 text-gray-500 p-3 shadow-md`}>
                {headers.map((header, index) => (
                    <span
                        className={`w-full max-h-fit flex flex-row justify-center items-center`}
                        key={index}>
                        {header}
                    </span>
                ))}
            </div>

            <ul className={`w-full max-h-fit flex flex-col gap-2`}>
                {body.map((row, i) => (
                    <li
                        onClick={e => toggleHandler(i, e)}
                        key={i}
                        className={`w-full max-h-fit flex flex-col shadow-md hover:shadow-sm`}>
                        <div
                            className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 p-3 gap-4 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.order_no}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.customer}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.orders.reduce(
                                    (accumulate, currentValue) => {
                                        return (
                                            accumulate + currentValue.quantity
                                        );
                                    },
                                    0
                                )}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                <p
                                    className={`w-fit h-fit px-1 rounded-md ${
                                        statusSelector(row.status).style
                                    }`}>
                                    {statusSelector(row.status).name}
                                </p>
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center gap-1 items-center`}>
                                {row.amount}{" "}
                                <span className={`text-xs text-gray-600`}>
                                    {" "}
                                    ugx
                                </span>
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                <span
                                    className={`w-fit h-auto flex flex-col justify-center items-center`}>
                                    <p>{row.date_time.date}</p>
                                    <p
                                        className={`self-start text-xs text-gray-600`}>
                                        {row.date_time.time}
                                    </p>
                                </span>
                            </span>
                        </div>
                        <div className={`max-h-0 overflow-hidden`}>
                            <div
                                className={`w-full h-fit p-2 flex flex-col gap-2 text-xs text-gray-400`}>
                                {row.orders.map((order, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-fit grid grid-cols-5 ring-1 ring-gray-600 p-1`}>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {order.serial_no}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {order.item}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {order.quantity}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>
                                            {order.unit_price}
                                            <span
                                                className={`text-xs text-gray-500`}>
                                                {" "}
                                                ugx
                                            </span>
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>
                                            {order.total_price}
                                            <span
                                                className={`text-xs text-gray-500`}>
                                                {" "}
                                                ugx
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
