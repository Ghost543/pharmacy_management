import React, { FC } from "react";
import { Session } from "next-auth";
import { useTabContext } from "@/context/useTabContext";
import { selector } from "@/utils/selector";
import Sidebar from "@/Components/sidebar";

export const MainLayout: FC<{ session: Session | null }> = ({ session }) => {
    const { tab } = useTabContext();
    let tab_ = selector(tab);

    return (
        <div
            className={`flex flex-row flex-grow h-screen w-full gap-x-2 justify-between`}>
            <div className={`w-1/6 min-h-screen `}>
                <Sidebar session={session} />
            </div>
            <div className={`w-5/6 h-screen overflow-scroll scroll-smooth`}>
                {tab_}
            </div>
        </div>
    );
};

export default MainLayout;
