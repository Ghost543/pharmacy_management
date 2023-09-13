import { useContext } from "react";
import { StockContext } from "@/context/stockContext";

export const useStockContext = () => {
    const context = useContext(StockContext);
    if (!context)
        throw new Error("useTabContext must be used inside a TabProvider");

    return context;
};
