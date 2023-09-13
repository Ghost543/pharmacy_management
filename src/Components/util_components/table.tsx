import React, { FC, useState } from "react";
// import classes from "*.module.sass";

import classes from "./table.module.css";
import { StockData } from "@/outputTypes/stock";

export const Table: FC<{ headers: string[]; body: StockData[] }> = ({
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
    return (
        <div
            className={`w-full h-auto flex flex-col gap-2 text-gray-400 text-sm`}>
            <div
                className={`w-full max-h-fit grid grid-cols-5 bg-gray-800 text-gray-500 p-3 shadow-md`}>
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
                            className={`w-full max-h-fit grid grid-cols-5 bg-gray-800 p-3 gap-4 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.stock_no}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.distributor}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.no_items}
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>
                                {row.cost}
                                <span>ugx</span>
                            </span>
                            <span
                                className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                {row.date.toDateString()}
                            </span>
                        </div>
                        <div className={`max-h-0 overflow-hidden`}>
                            <div
                                className={`w-full h-fit p-2 flex flex-col gap-2 text-xs text-gray-400`}>
                                {row.items.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`w-full h-fit grid grid-cols-6 ring-1 ring-gray-600 p-1`}>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {item.name}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {item.brand}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>{`${
                                            item.quantity
                                        } ${
                                            item.quantity > 1 ? "units" : "unit"
                                        }`}</span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {item.mfd.toDateString()}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                            {item.exd.toDateString()}
                                        </span>
                                        <span
                                            className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>
                                            {item.buying_price}{" "}
                                            <span> ugx</span>
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
