import React, { FC, useState } from "react";
import { useAddItemContext } from "@/context/useAddItemContext";
import { Item } from "@/dtos/addStockDto.dto";
import { FaPills } from "react-icons/fa";

export const EditItem: FC<{ item_: Item; index: number }> = ({
    item_,
    index,
}) => {
    const [name, setName] = useState<string>(item_.name);
    const [brand, setBrand] = useState<string>(item_.brand);
    const [quantity, setQuantity] = useState<number>(item_.quantity);
    const [serial_no, setSerialNo] = useState<string>(item_.serial_no);
    const [mfd_, setMfd] = useState<string>("");
    const [exd_, setExd] = useState<string>("");
    const [selling_price, setSellingPrice] = useState<number>(
        item_.selling_price
    );
    const [buying_price, setBuyingPrice] = useState<number>(item_.buying_price);

    const { changeEditDrawer, editItem } = useAddItemContext();
    const edit = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        const ex = new Date(exd_);
        const mf = new Date(mfd_);
        const item: Item = {
            name: name,
            brand: brand,
            quantity: quantity,
            serial_no: serial_no,
            buying_price: buying_price,
            selling_price: selling_price,
            exd: ex,
            mfd: mf,
        };
        editItem(item, index);
        changeEditDrawer(false);
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
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="text"
                        name={"drug_name"}
                        placeholder="Drug name"
                    />
                    <input
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="text"
                        name={"brand_name"}
                        placeholder="Brand Name"
                    />

                    <input
                        value={serial_no}
                        onChange={e => setSerialNo(e.target.value)}
                        className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="text"
                        name={"serial_no"}
                        placeholder="Serial Number"
                    />

                    <input
                        value={quantity === 0 ? undefined : quantity}
                        onChange={e => setQuantity(parseInt(e.target.value))}
                        className={`placeholder:text-sm apperance-none text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-64 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                        type="number"
                        name={"quantity"}
                        placeholder="Quantity"
                    />

                    <div className={`w-full h-fit grid grid-cols-2 gap-2.5`}>
                        <input
                            value={
                                selling_price === 0 ? undefined : selling_price
                            }
                            onChange={e =>
                                setSellingPrice(parseFloat(e.target.value))
                            }
                            className={`placeholder:text-sm appearance-none text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-30 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                            type="number"
                            name={"selling_price"}
                            placeholder="Selling Price"
                        />
                        <input
                            value={
                                buying_price === 0 ? undefined : buying_price
                            }
                            onChange={e =>
                                setBuyingPrice(parseFloat(e.target.value))
                            }
                            className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-30 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                            type="number"
                            name={"selling_price"}
                            placeholder="Buying Price"
                        />
                    </div>

                    <div className={`w-full h-fit grid grid-cols-2 gap-2.5`}>
                        <div>
                            <p className={`text-sm text-gray-500`}>
                                Manufacture Date
                            </p>
                            <input
                                value={mfd_}
                                onChange={e => setMfd(e.target.value)}
                                className={`placeholder:text-sm text-gray-400 appearance-none bg-transparent ring-2 ring-gray-500 h-6 pb-2 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                                type="date"
                                name={"mfd"}
                                placeholder="Manufature date"
                            />
                        </div>

                        <div>
                            <p className={`text-sm text-gray-500`}>
                                Expiry Date
                            </p>
                            <input
                                value={exd_}
                                onChange={e => setExd(e.target.value)}
                                className={`placeholder:text-sm text-gray-400 bg-transparent ring-2 ring-gray-500 h-6 w-full outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                                type="date"
                                name={"exd"}
                                placeholder="Expiry date"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`w-full max-h-fit flex flex-row justify-end gap-4 p-2`}>
                    <span
                        onClick={() => changeEditDrawer(false)}
                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        Cancel
                    </span>
                    <span
                        onClick={e => edit(e)}
                        className={`p-2 flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}>
                        Ok
                    </span>
                </div>
            </div>
        </div>
    );
};
