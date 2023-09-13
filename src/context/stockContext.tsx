import React, { createContext, FC, useEffect, useState } from "react";
import { ItemsData, StockData } from "@/outputTypes/stock";
import { trpc } from "@/utils/trpc";

interface StockContextProp {
    stocks: StockData[];
    addStock: (stock: StockData) => void;
}

export const StockContext = createContext<StockContextProp | undefined>(
    undefined
);

export const StockProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const result = trpc.stock.all.useQuery();

    const [stocks, setStocks] = useState<StockData[]>([]);
    useEffect(() => {
        const stock = result.data;
        setStocks(stock ? stock : []);
    }, []);

    const addStock = (stock_: StockData) => {
        setStocks([...stocks, stock_]);
    };

    const value: StockContextProp = {
        stocks,
        addStock,
    };

    return (
        <StockContext.Provider value={value}>{children}</StockContext.Provider>
    );
};
