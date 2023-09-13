import React, { createContext, FC, useState } from "react";
import { Item } from "@/dtos/addStockDto.dto";

interface AddItemContextProp {
    items: Item[];
    drawer: boolean;
    edit: { item: Item; index: number } | undefined;
    changeDrawer: (draw: boolean) => void;
    addItem: (item: Item) => void;
    deleteItem: (item: Item) => void;
    editDrawer: boolean;
    changeEditDrawer: (draw: boolean) => void;
    editItem: (item: Item, index: number) => void;
    changeItem: (item: Item, index: number) => void;
    reset: () => void;
}

export const AddItemContext = createContext<AddItemContextProp | undefined>(
    undefined
);

export const AddItemProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [drawer, setDrawer] = useState<boolean>(false);
    const [editDrawer, setEditDrawer] = useState<boolean>(false);
    const [items, setItems] = useState<Item[]>([]);
    const [edit, setItem] = useState<{ item: Item; index: number } | undefined>(
        undefined
    );
    const addItem = (item: Item) => {
        setItems([...items, item]);
    };
    const changeDrawer = (drawer: boolean) => {
        setDrawer(drawer);
    };
    const deleteItem = (item: Item) => {
        const it = items.filter(item_ => item_ !== item);
        setItems(it);
    };

    const changeEditDrawer = (draw: boolean) => {
        setEditDrawer(draw);
    };
    const changeItem = (item: Item, index: number) => {
        setItem({ item, index });
    };

    const editItem = (item: Item, index: number) => {
        let its = items;
        its[index] = item;
        setItems(its);
        setItem(undefined);
    };
    const reset = () => {
        setItems([]);
        setItem(undefined);
    };

    const value: AddItemContextProp = {
        drawer,
        editDrawer,
        items,
        edit,
        changeDrawer,
        changeEditDrawer,
        addItem,
        deleteItem,
        editItem,
        changeItem,
        reset,
    };

    return (
        <AddItemContext.Provider value={value}>
            {children}
        </AddItemContext.Provider>
    );
};
