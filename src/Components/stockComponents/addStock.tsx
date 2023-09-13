import React, { FC, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { StockModalTable } from "@/Components/util_components/stock_modal_table";
import { trpc } from "@/utils/trpc";
import { Item } from "@/dtos/addStockDto.dto";
import { useAddItemContext } from "@/context/useAddItemContext";
import { no_gen } from "@/utils/no_gen";
import { getSession } from "next-auth/react";
import { useStockContext } from "@/context/useStockContext";

export const AddStock: FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [supplier_name, setSupplierName] = useState<string>("");
    const [supplier_email, setSupplierEmail] = useState<string>("");
    const [supplier_address, setSupplierAddress] = useState<string>("");
    const [supplier_tel, setSupplierTel] = useState<string>("");

    const { changeDrawer, items, changeEditDrawer, changeItem, reset } =
        useAddItemContext();

    const { addStock } = useStockContext();

    const session = getSession();
    const mutate = trpc.stock.add.useMutation();
    const submitStock = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        // console.log(session);
        mutate.mutate({
            stock_no: no_gen("st"),
            distributor: {
                name: supplier_name,
                email: supplier_email,
                address: supplier_address,
                tel: supplier_tel,
            },
            items: items,
            cost: items.reduce((acc, curr, _) => {
                return acc + curr.quantity * curr.buying_price;
            }, 0),
        });
        if (mutate.isSuccess) {
            reset();
            const res = mutate.data;
            addStock(res);
            changeDrawer(false);
        }
    };

    const edit = (item: Item, index: number, draw: boolean) => {
        // e.preventDefault();
        changeEditDrawer(draw);
        changeItem(item, index);
    };

    return (
        <div
            className={`w-4/5 max-h-fit flex flex-col gap-2 p-2 rounded-md shadow-2xl bg-gray-900/60`}>
            {mutate.isLoading ? <p>Loading ...</p> : null}
            {mutate.isError ? <p>{mutate.error.message}</p> : null}
            <div
                className={`w-full max-h-fit flex flex-row justify-between items-center `}>
                <div
                    className={`w-4/5 max-h-fit grid grid-cols-2  gap-2.5 p-2`}>
                    <input
                        value={supplier_name}
                        onChange={e => setSupplierName(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="text"
                        name={"supplier_name"}
                        placeholder="Distributor's Name"
                    />
                    <input
                        value={supplier_email}
                        onChange={e => setSupplierEmail(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="email"
                        name={"supplier_email"}
                        placeholder="Email Address"
                    />
                    <input
                        value={supplier_address}
                        onChange={e => setSupplierAddress(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="text"
                        name={"supplier_address"}
                        placeholder="Address"
                    />
                    <input
                        value={supplier_tel}
                        onChange={e => setSupplierTel(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="tel"
                        name={"supplier_tel"}
                        placeholder="Telephone"
                    />
                </div>
                <div
                    className={`w-1/5 max-h-fit flex flex-row justify-end items-center`}>
                    <span
                        onClick={() => changeDrawer(true)}
                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        <IoAddSharp className={`text-lg text-gray-400`} /> Add
                        item
                    </span>
                </div>
            </div>

            <StockModalTable items={items} edit={edit} />
            <div
                className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                <span
                    onClick={() => closeModal()}
                    className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                    Cancel
                </span>
                <span
                    onClick={e => submitStock(e)}
                    className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                    Add Stock
                </span>
            </div>
        </div>
    );
};
