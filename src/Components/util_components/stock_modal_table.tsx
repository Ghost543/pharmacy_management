import React, { FC } from "react";
import { Item } from "@/dtos/addStockDto.dto";
import { HiDotsVertical } from "react-icons/hi";

export const StockModalTable: FC<{
    items: Item[];
    edit: (item: Item, index: number, draw: boolean) => void;
}> = ({ items, edit }) => {
    return (
        <div
            className={`w-full max-h-fit p-2 bg-gray-500 rounded-md flex flex-col gap-2 text-gray-400 text-xs`}>
            <div
                className={`w-full max-h-fit grid grid-cols-7 bg-gray-800 text-gray-500 p-3 shadow-md`}>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    Brand Name
                </span>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    Item Name
                </span>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    Quantity
                </span>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    MF-Date
                </span>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    EXP-Date
                </span>
                <span
                    className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                    Cost
                </span>
                <span
                    className={`w-10 max-h-fit flex flex-row justify-center items-center justify-self-end`}></span>
            </div>
            <ul className={`w-full max-h-fit flex flex-col gap-2`}>
                {items.map((item, i) => (
                    <li
                        key={i}
                        className={`w-full max-h-fit grid grid-cols-7 bg-gray-800 p-3 gap-4 rounded-md shadow-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                        <span
                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                            {item.brand}
                        </span>
                        <span
                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                            {item.name}
                        </span>
                        <span
                            className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                            {item.quantity}
                        </span>
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
                            {item.buying_price * item.quantity}
                            <span>ugx</span>
                        </span>
                        <span
                            onClick={() => edit(item, i, true)}
                            className={`w-10 cursor-pointer max-h-fit flex flex-row justify-center items-center justify-self-end`}>
                            <HiDotsVertical />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
