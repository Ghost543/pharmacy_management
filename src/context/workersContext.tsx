import React, { createContext, FC, useState } from "react";
import { WorkerTableType } from "@/Components/workersComponents/workerTableType";

interface WorkersContextProp {
    worker: WorkerTableType|undefined,
    drawer: boolean,
    changeDrawer: (draw: boolean) => void,
    changeWorker: (worker: WorkerTableType) => void
}

export const WorkerContext = createContext<WorkersContextProp | undefined>(undefined);

export const WorkerProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [worker, setWorker] = useState<WorkerTableType| undefined>(undefined);
    const [drawer, setDrawer] = useState<boolean>(false);
    const changeWorker = (worker: WorkerTableType) => {
        setWorker(worker);
    };
    const changeDrawer = (drawer: boolean) => {
        setDrawer(drawer);
    };

    const value: WorkersContextProp = {
        worker,
        drawer,
        changeDrawer,
        changeWorker
    };

    return <WorkerContext.Provider value={value}>{children}</WorkerContext.Provider>;
}