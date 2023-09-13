import { useContext } from "react";
import { TabContext } from "@/context/tabContext";
import { WorkerContext } from "@/context/workersContext";

export const useWorkersContext = () => {
    const context = useContext(WorkerContext);
    if (!context)
        throw new Error("useWorkers must be used inside a WorkersProvider");

    return context;
};
