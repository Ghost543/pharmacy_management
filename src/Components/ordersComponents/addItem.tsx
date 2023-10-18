import { trpc } from "@/utils/trpc";
import React, { FC, useEffect, useState } from "react";
import { FaPills } from "react-icons/fa";
import { ItemRouter } from "@/outputTypes/stock";

export const AddItem: FC<{ cancel: (drawer: boolean) => void }> = ({
    cancel,
}) => {
    const [inputVal, setInputVal] = useState<string>("");

    const search = async (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
    };

    const add = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        cancel(false);
    };

    const close = () => {
        cancel(false);
    };

    return (
        <div
            className={`w-full h-full bg-gray-900/50 rounded-md flex flex-col justify-between p-2`}>
            <div
                className={`w-full h-full flex flex-col justify-between items-end gap-1 p-2`}>
                <div
                    className={`w-full h-fit p-2 flex flex-row justify-end items-center gap-2`}>
                    <FaPills className={`w-6 h-6 text-gray-400`} />
                    <p className={`text-gray-400 font-lg text-lg`}>Add Item</p>
                </div>
                <div className={`w-full h-fit flex flex-col gap-4`}>
                    <div
                        className={`relative w-full h-fit flex flex-row gap-1`}>
                        <input
                            className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                            type="text"
                            name={"query"}
                            placeholder="Search for drug"
                        />

                        <span
                            className={`p-1 flex w-26 h-6 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}
                            onClick={e => {
                                search(e);
                            }}>
                            search
                        </span>
                        {/*{searchedItems && (*/}
                        {/*    <ul*/}
                        {/*        className={`absolute top-8 text-gray-400 bg-gray-900/80 ring-2 ring-gray-500 max-h-fit w-full p-2 z-auto flex flex-col gap-2`}>*/}
                        {/*        {searchedItems*/}
                        {/*            .filter(*/}
                        {/*                item =>*/}
                        {/*                    item.brand.includes(val) ||*/}
                        {/*                    item.name.includes(val)*/}
                        {/*            )*/}
                        {/*            .map(item => (*/}
                        {/*                <li*/}
                        {/*                    onClick={() =>*/}
                        {/*                        setSelectedItem(item)*/}
                        {/*                    }*/}
                        {/*                    key={item.id}*/}
                        {/*                    className={`w-full max-h-fit p-2 grid grid-cols-2 cursor-pointer`}>*/}
                        {/*                    <span>{item.name}</span>*/}
                        {/*                    <span>{item.brand}</span>*/}
                        {/*                </li>*/}
                        {/*            ))}*/}
                        {/*    </ul>*/}
                        {/*)}*/}
                    </div>

                    <div className={`w-full h-fit grid grid-cols-2 gap-2.5`}>
                        <input
                            className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-30 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                            type="number"
                            name={"quantity"}
                            placeholder="Quantity"
                        />
                    </div>

                    {/*<div*/}
                    {/*    className={`w-full h-fit grid grid-cols-2 gap-2.5`}></div>*/}
                </div>
                <div
                    className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                    <span
                        onClick={() => close()}
                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        Cancel
                    </span>
                    <span
                        onClick={e => add(e)}
                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        Ok
                    </span>
                </div>
            </div>
        </div>
    );
};
