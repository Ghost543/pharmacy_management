import { useContext } from "react";
import { AddItemContext } from "@/context/addItemDrawerContext";

export const useAddItemContext = () => {
    const context = useContext(AddItemContext);
    if (!context)
        throw new Error(
            "useAddItem must be used inside a AddItemContextProvider"
        );

    return context;
};
