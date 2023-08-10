import React from 'react';

export const StockModalTable = () => {
    return (
        <div className={`w-11/12 max-h-fit p-2 bg-gray-500 rounded-md flex flex-col gap-2 text-gray-400 text-xs`}>
            <div className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 text-gray-500 p-3 shadow-md`}>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Brand Name</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Item Name</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Quantity</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>MF-Date</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>EXP-Date</span>
                <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Cost</span>
            </div>
            <ul className={`w-full max-h-fit flex flex-col gap-2`}>
                <li className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 p-3 gap-4 rounded-md shadow-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Panadol Extra</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Paracetamol</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>100</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>13/04/2023</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>12/04/2026</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>60,000,000<span>ugx</span></span>
                </li>
                <li className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 p-3 gap-4 rounded-md shadow-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Panadol Extra</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Paracetamol</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>100</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>13/04/2023</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>12/04/2026</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>60,000,000<span>ugx</span></span>
                </li>
                <li className={`w-full max-h-fit grid grid-cols-6 bg-gray-800 p-3 gap-4 rounded-md shadow-md ease-in-out hover:shadow-sm hover:-translate-y-1 hover:-translate-x-1 cursor-pointer`}>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Panadol Extra</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>Paracetamol</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>100</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>13/04/2023</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center`}>12/04/2026</span>
                    <span className={`w-full max-h-fit flex flex-row justify-center items-center gap-1`}>60,000,000<span>ugx</span></span>
                </li>
            </ul>
        </div>
    );
};