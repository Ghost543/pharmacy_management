import React, { FC } from 'react';
import { Inconsolata } from 'next/font/google';
import { FaUserCircle } from "react-icons/fa";
import {useTabContext} from "@/context/useTabContext";

const inter = Inconsolata({
    weight: ["200", "400", "500", "700", "900"],
    subsets: ['latin']
});

const Sidebar:FC = () => {
    const labels = ["Dashboard", "Sales", "Stock", "Orders", "Workers"];
    const { changeTab } = useTabContext();

    const handleClick = (text: string, e:React.MouseEvent<HTMLLIElement>) => {
        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        for (let col=0; col < children.length; col++){
            children[col].className = `w-full h-fit py-2 px-4 hover:font-bold ${inter.className} hover:bg-sky-700 ease-in-out hover:shadow-sm hover:-translate-y-0.5 cursor-pointer`;
        }

        const element = e.currentTarget;
        element.className = `w-full h-fit py-2 px-4 hover:font-bold ${inter.className} hover:bg-sky-700 ease-in-out hover:shadow-sm hover:-translate-y-0.5 cursor-pointer active bg-sky-700`;
        changeTab(text)
    }
    return (
        <div className={ `w-full h-full flex flex-col gap-y-2 justify-between py-2 bg-sky-800 shadow-sm` }>
            <div className={`w-full h-1/6 flex flex-row justify-center items-center`}>
                <h2 className={`${inter.className} font-extrabold text-2xl text-sky-100`}>Pharmacy Logo</h2>
            </div>

            <div className={ `w-full h-5/6 flex flex-col gap-y-2 justify-between` }>


                <ul className={ `flex flex-col justify-evenly gap-2` }>
                    {
                        labels.map((label, index) => <li
                            key={ index }
                            aria-current="page"
                            onClick={(e) => { handleClick(label, e) }}
                            className={ `w-full h-fit py-2 px-4 hover:font-bold ${inter.className} hover:bg-sky-700 ease-in-out hover:shadow-sm hover:-translate-y-0.5 cursor-pointer` }
                        >
                            {label}
                        </li>
                        )
                    }

                </ul>

                <div className={`w-full h-auto flex flex-row gap-x-2 py-1 px-2 items-center bg-sky-700`}>
                    <FaUserCircle className={`text-3xl cursor-pointer`}/>
                    <div className={`w-3/4 h-fit flex flex-row justify-between items-center py-2`}>
                        <h3 className={`${inter.className} font-semibold text-sm cursor-pointer`}>User name</h3>
                        <h4 className={`${inter.className} font-semibold text-sm px-1 ring-1 ring-sky-600 rounded-md`}>manager</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;