import React, { FC } from "react";
import { Inconsolata, Teko, El_Messiri } from "next/font/google";
import { Pagination } from "@/Components/Pagination";
import { IoAddSharp, IoSearchSharp } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

const inter = Inconsolata({
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

export const SalesLayout: FC<{ data: string }> = ({ data }) => {
    return (
        <div
            className={`${inter.className} flex flex-col items-center w-full min-h-screen p-2 gap-4`}>
            {/*{ data }*/}
            <div
                className={`flex flex-row w-fit justify-center items-center h-auto rounded-md gap-2 tacking-wide mt-16`}>
                <div className={`bg-sky-400/40 rounded-md p-2`}>
                    <h3 className={`font-bold text-sm text-sky-200`}>
                        Sales Pending for pay
                    </h3>
                    <p className={`font-semibold text-sm text-sky-200`}>
                        Total:{" "}
                        <span
                            className={`font-bold text-xl text-sky-200 ${teko.className}`}>
                            3,000
                        </span>
                    </p>
                    <p className={`font-semibold text-sm text-sky-200`}>
                        Cost:{" "}
                        <span
                            className={`font-bold text-xl text-sky-200 ${teko.className}`}>
                            10,000,000
                        </span>
                        <span
                            className={`font-semibold text-xs ${elMessiri.className}`}>
                            {" "}
                            ugx
                        </span>
                    </p>
                </div>
                <div className={`bg-emerald-400/40 p-2 rounded-md`}>
                    <h3 className={`font-bold text-sm text-emerald-300`}>
                        Sales Paid for pay
                    </h3>
                    <p className={`font-semibold text-sm text-emerald-300`}>
                        Total:{" "}
                        <span
                            className={`font-bold text-xl text-emerald-300 ${teko.className}`}>
                            2000
                        </span>
                    </p>
                    <p className={`font-semibold text-sm text-emerald-300`}>
                        Cost:{" "}
                        <span
                            className={`font-bold text-xl text-emerald-300 ${teko.className}`}>
                            40,000,000{" "}
                        </span>{" "}
                        ugx
                        <span
                            className={`font-semibold text-xs ${elMessiri.className}`}></span>
                    </p>
                </div>
                <div className={`bg-yellow-400/40 p-2 rounded-md`}>
                    <h3 className={`font-bold text-sm text-yellow-300`}>
                        Sales Half Paid for pay
                    </h3>
                    <p className={`font-bold text-sm text-yellow-300`}>
                        Total:{" "}
                        <span
                            className={`font-bold text-xl text-yellow-300 ${teko.className}`}>
                            10,000
                        </span>
                    </p>
                    <p className={`font-semibold text-sm text-yellow-300`}>
                        Cost:{" "}
                        <span
                            className={`font-bold text-xl text-yellow-300 ${teko.className}`}>
                            100,000,000
                        </span>{" "}
                        ugx
                        <span
                            className={`font-semibold text-xs ${elMessiri.className}`}></span>
                    </p>
                </div>
                <div className={`bg-red-400/40 rounded-md p-2`}>
                    <h3 className={`font-bold text-sm text-red-300`}>
                        Sales Cancelled for pay
                    </h3>
                    <p className={`font-bold text-sm text-red-300`}>
                        Total:{" "}
                        <span
                            className={`font-bold text-xl text-red-300 ${teko.className}`}>
                            1000
                        </span>
                    </p>
                    <p className={`font-semibold text-sm text-red-300`}>
                        Cost:{" "}
                        <span
                            className={`font-bold text-xl text-red-300 ${teko.className}`}>
                            18,000,000
                        </span>
                        <span
                            className={`font-semibold text-xs ${elMessiri.className}`}>
                            ugx
                        </span>
                    </p>
                </div>
            </div>
            <div className={`w-full h-auto flex flex-row gap-4 md:mt-10`}>
                <div
                    className={`w-2/3 h-auto p-2 flex flex-col gap-2 rounded-md bg-gray-800/40 `}>
                    <div
                        className={`w-full h-fit flex flex-row justify-between items-center`}>
                        <div
                            className={`max-w-fit border-2 border-gray-600 rounded-full p-1 justify-between items-center`}>
                            <input
                                type="text"
                                placeholder="search"
                                className={`bg-transparent w-36 h-6 placeholder:font-medium placeholder-gray-600 placeholder:text-sm text-xs text-gray-300  p-2 outline-0 border-none focus:border-none focus:ring-0 focus:outline-none`}
                            />
                            <button>
                                <IoSearchSharp className={`text-gray-600`} />
                            </button>
                        </div>
                        <button
                            className={`max-w-fit h-fit flex flex-row items-center p-2 ring-2 ring-sky-700 hover:bg-sky-700 hover:text-sky-200 rounded-md`}>
                            <IoAddSharp
                                className={`text-lg text-gray-300 hover:text-sky-200`}
                            />
                            <span
                                className={`text-sm text-gray-300 hover:text-sky-200`}>
                                Add Sales
                            </span>
                        </button>
                    </div>
                    <table
                        className={`w-full h-auto table text-gray-400 border-separate border-spacing-y-2 text-sm`}>
                        <thead className={`bg-gray-800 text-gray-500`}>
                            <tr>
                                <th className={`p-3`}>Sales No</th>
                                <th className={`p-3`}>Order No</th>
                                <th className={`p-3`}>Amount</th>
                                <th className={`p-3`}>Status</th>
                                <th className={`p-3`}>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    S12345_8989
                                </td>
                                <td className={`p-3 text-center`}>
                                    O32421_8754
                                </td>
                                <td className={`p-3 text-center`}>2,000,000</td>
                                <td className={`p-3 text-center md:pl-11`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-emerald-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    01/03/2023
                                </td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    S52445_8989
                                </td>
                                <td className={`p-3 text-center`}>
                                    932421_8754
                                </td>
                                <td className={`p-3 text-center`}>1,150,000</td>
                                <td className={`p-3 text-center md:pl-11`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-yellow-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    06/11/2023
                                </td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    S12645_0989
                                </td>
                                <td className={`p-3 text-center`}>
                                    762421_4354
                                </td>
                                <td className={`p-3 text-center`}>5,130,000</td>
                                <td className={`p-3 text-center md:pl-11`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-blue-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    06/11/2023
                                </td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    S29745_0989
                                </td>
                                <td className={`p-3 text-center`}>
                                    974421_4354
                                </td>
                                <td className={`p-3 text-center`}>130,000</td>
                                <td className={`p-3 text-center md:pl-11`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-red-600`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    06/11/2023
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={` w-full h-auto flex flex-row justify-end`}>
                        <Pagination pages={4} />
                    </div>
                </div>
                <div
                    className={`w-1/3 h-fit p-2 flex flex-col gap-2 rounded-md bg-gray-800/40`}>
                    <table
                        className={`w-full h-auto table text-gray-400 border-separate border-spacing-y-2 text-xs`}>
                        <thead className={`bg-gray-800 text-gray-500`}>
                            <tr>
                                <th className={`p-3`}>Order No</th>
                                <th className={`p-3`}>Status</th>
                                <th className={`p-3`}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>2,000,000</td>
                                <td className={`p-3 text-center md:pl-8`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-emerald-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    O32421_8754
                                </td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>1,150,000</td>
                                <td className={`p-3 text-center md:pl-8`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-yellow-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>
                                    932421_8754
                                </td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    762421_4354
                                </td>
                                <td className={`p-3 text-center md:pl-8`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-blue-500`}></div>
                                </td>
                                <td className={`p-3 text-center`}>5,130,000</td>
                            </tr>
                            <tr
                                className={`bg-gray-800 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                <td className={`p-3 text-center`}>
                                    974421_4354
                                </td>
                                <td className={`p-3 text-center md:pl-8`}>
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full bg-red-600`}></div>
                                </td>
                                <td className={`p-3 text-center`}>130,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
