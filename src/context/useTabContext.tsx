import { useContext } from "react";
import { TabContext } from "@/context/tabContext";

export const useTabContext = () => {
    const context = useContext(TabContext);
    if (!context)
        throw new Error("useTabContext must be used inside a TabProvider");

    return context;
};
