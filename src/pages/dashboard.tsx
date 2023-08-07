import React, {FC} from 'react';
import Sidebar from "@/Components/sidebar";
import {useTabContext} from "@/context/useTabContext";
import {selector} from "@/utils/selector";

const Dashboard: FC = () => {
    const { tab } = useTabContext();
    let tab_ = selector(tab);
    return (
        <div className={`flex flex-row flex-grow h-full w-full gap-x-2 justify-between`}>
            <div className={`w-1/6 min-h-screen `}>
                <Sidebar />
            </div>
            <div className={`w-5/6 h-full`}>
                { tab_ }
            </div>
        </div>
    );
}

export default Dashboard;