import {createContext, FC, useState} from "react";

interface TabContextProp {
    tab: string,
    changeTab: (text: string) => void
}

export const TabContext = createContext<TabContextProp | undefined>(undefined);

export const TabProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [tab, setTab] = useState<string>("Dashboard");
    const changeTab = (text: string) => {
        setTab(text);
    };

    const value: TabContextProp = {
        tab,
        changeTab
    };

    return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}