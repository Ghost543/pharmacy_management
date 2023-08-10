import React, {FC} from 'react';

export const StockItemsTable:FC<{ headers: string[], body: string[][] }> = ({ headers, body }) => {
    return (
        <div className={`w-full h-auto flex flex-col gap-2 text-gray-400 text-sm`}>
            <div className={`w-full max-h-fit grid grid-cols-8 bg-gray-800 text-gray-500 p-3 shadow-md`}>
                { headers.map((header, index) => (
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`} key={index}>{ header }</span>
                )) }
            </div>
            <ul className={`w-full max-h-fit flex flex-col gap-2`}>
                {
                    body.map((row, i) => (
                        <li
                            key={ i } className={`w-full max-h-fit flex flex-col shadow-md hover:shadow-sm`}>
                            <div
                                className={`w-full max-h-fit grid grid-cols-8 bg-gray-800 p-3 gap-4 rounded-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                                { row.map((val,index) => (
                                    <span
                                        key={ index }
                                        className={`w-full max-h-fit flex flex-row justify-center items-center`}>
                                        { val }
                                    </span>
                                )) }
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
