import React, { FC, useEffect, useState } from "react";
import { El_Messiri, Inconsolata, Teko } from "next/font/google";
import { Table } from "@/Components/util_components/table";
import { IoAddSharp } from "react-icons/io5";
import { StockModalTable } from "@/Components/util_components/stock_modal_table";
import { StockItemsTable } from "@/Components/util_components/stock_items_table";
import { trpc } from "@/utils/trpc";
import { AddStock } from "@/Components/stockComponents/addStock";
import { WorkerDrawer } from "@/Components/workersComponents/workerDrawer";
import { AddItem } from "@/Components/stockComponents/addItem";
import { useAddItemContext } from "@/context/useAddItemContext";
import { EditItem } from "@/Components/stockComponents/editItem";
import { useStockContext } from "@/context/useStockContext";
import { ItemRouter } from "@/outputTypes/stock";

const inconsolata = Inconsolata({
    weight: ["200", "400", "500", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

const elMessiri = El_Messiri({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const tableHeaders = ["Stock No", "Distributor", "No Items", "Amount", "Date"];

const mainTableHeaders = [
    "Stock No",
    "Serial No",
    "Item",
    "Brand",
    "Quantity",
    "Exp-Date",
    "Delivery Date",
    "Selling Price",
];
const mainTableBody = [
    [
        "st000000010",
        "6188522935001",
        "Paracetamol",
        "Panadol Extra",
        "200",
        "03/07/2025",
        "14/02/2022",
        "25000",
    ],
];

export const StockLayout: FC<{ data: string }> = ({ data }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [items, setItems] = useState<ItemRouter[]>([]);

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const { drawer, editDrawer, edit } = useAddItemContext();
    const { stocks } = useStockContext();
    const result = trpc.item.all.useQuery();
    useEffect(() => {
        const items_ = result.data;
        setItems(items_ ? items_ : []);
    }, []);

    return (
        <div
            className={`${inconsolata.className} relative flex flex-col items-center w-full min-h-screen p-2 gap-4`}>
            {/*{ data }*/}
            <div
                className={`flex flex-row w-fit justify-center items-center h-auto rounded-md gap-2 tacking-wide mt-16`}>
                <div className={`bg-sky-400/40 rounded-md p-3`}>
                    <h3 className={`font-bold text-2xl text-sky-200`}>
                        Available items
                    </h3>
                    <p className={`font-semibold text-sm text-sky-200`}>
                        <span
                            className={`font-bold text-6xl text-sky-200 ${teko.className}`}>
                            30
                        </span>
                        <span
                            className={`font-semibold text-base ${elMessiri.className}`}>
                            {" "}
                            items
                        </span>
                    </p>
                </div>

                <div className={`bg-yellow-400/40 p-3 rounded-md`}>
                    <h3 className={`font-bold text-2xl text-yellow-300`}>
                        About to deplete
                    </h3>
                    <p className={`font-semibold text-sm text-yellow-300`}>
                        <span
                            className={`font-bold text-6xl text-yellow-300 ${teko.className}`}>
                            20
                        </span>{" "}
                        items
                        <span
                            className={`font-semibold text-base ${elMessiri.className}`}></span>
                    </p>
                </div>

                <div className={`bg-red-400/40 rounded-md p-3`}>
                    <h3 className={`font-bold text-2xl text-red-300`}>
                        Depleted items
                    </h3>
                    <p className={`font-semibold text-sm text-red-300`}>
                        <span
                            className={`font-bold text-6xl text-red-300 ${teko.className}`}>
                            10
                        </span>
                        <span
                            className={`font-semibold text-base ${elMessiri.className}`}>
                            items
                        </span>
                    </p>
                </div>
            </div>
            <div className={`w-full h-auto md:mt-8 flex flex-col gap-4`}>
                <div className={` w-full h-auto flex flex-row gap-4 `}>
                    <div
                        className={`w-2/3 h-auto p-2 flex flex-col gap-2 rounded-md bg-gray-800/40 `}>
                        <div
                            className={`w-full max-h-fit flex flex-row justify-end items-center`}>
                            <span
                                onClick={() => openModal()}
                                className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                                <IoAddSharp
                                    className={`text-lg text-gray-400`}
                                />{" "}
                                Add Stock
                            </span>

                            {modal && (
                                <div
                                    className={`absolute right-2 top-0  bg-gray-900/20 w-full h-full flex flex-row justify-center gap-2 items-center`}>
                                    <AddStock closeModal={closeModal} />
                                </div>
                            )}
                        </div>
                        {stocks ? (
                            <Table headers={tableHeaders} body={stocks} />
                        ) : (
                            <p>No Stock data</p>
                        )}
                    </div>
                    <div
                        className={`w-1/3 h-fit p-2 flex flex-col gap-2 rounded-md bg-gray-800/40`}>
                        {/*/!*<div className={`w-full max-h-fit rounded-md flex flex-col gap-2 text-gray-400 text-xs`}>*!/*/}
                        {/*/!*    <div className={`w-full max-h-fit grid grid-cols-4 bg-gray-800 text-gray-500 p-2 shadow-md`}>*!/*/}
                        {/*/!*        <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Stock No</span>*!/*/}
                        {/*/!*        /!*<span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Serial No</span>*!/*!/*/}
                        {/*/!*        <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Item</span>*!/*/}
                        {/*/!*        <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Status</span>*!/*/}
                        {/*/!*        <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Exp-Date</span>*!/*/}
                        {/*/!*    </div>*!/*/}
                        {/*/!*    <ul className={`w-full max-h-fit flex flex-col gap-2`}>*!/*/}
                        {/*/!*        <li className={`w-full max-h-fit grid grid-cols-4 bg-gray-800 p-2 gap-4 rounded-md shadow-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>*!/*/}
                        {/*/!*            <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>st000000004</span>*!/*/}
                        {/*/!*            /!*<span className={`w-full max-h-fit flex flex-row justify-center items-center`}>88654836207314</span>*!/*!/*/}
                        {/*/!*            <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Panadol Extra</span>*!/*/}
                        {/*/!*            <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>*!/*/}
                        {/*/!*                <div className={`w-2.5 h-2.5 rounded-full bg-blue-500`}></div>*!/*/}
                        {/*/!*            </span>*!/*/}
                        {/*/!*            <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>12/04/2023</span>*!/*/}
                        {/*/!*        </li>*!/*/}
                        {/*/!*    </ul>*!/*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={`w-full max-h-fit rounded-md bg-gray-800/40`}>
                    <StockItemsTable headers={mainTableHeaders} body={items} />
                </div>
            </div>
            <div
                className={`absolute w-1/3 h-screen top-0 right-0 p-2 ${
                    drawer ? "" : "hidden overflow-hidden"
                }`}>
                <AddItem />
            </div>
            <div
                className={`absolute w-1/3 h-screen top-0 right-0 p-2 ${
                    editDrawer ? "" : "hidden overflow-hidden"
                }`}>
                {edit ? (
                    <EditItem item_={edit.item} index={edit.index} />
                ) : (
                    <p>Select an item</p>
                )}
            </div>
        </div>
    );
};
