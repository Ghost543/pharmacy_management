import { SalesLayout } from "@/Components/salesComponents/salesLayout";
import { StockLayout } from "@/Components/stockComponents/stockLayout";
import { OrdersLayout } from "@/Components/ordersComponents/ordersLayout";
import { WorkersLayout } from "@/Components/workersComponents/workersLayout";
import { DashboardLayout } from "@/Components/dashboardComponents/dashboardLayout";

export const selector = (tab: string) => {
    switch (tab.toLowerCase()) {
        case "sales":
            return <SalesLayout data={tab} />;
        case "stock":
            return <StockLayout data={tab} />;
        case "orders":
            return <OrdersLayout data={tab} />;
        case "workers":
            return <WorkersLayout data={tab} />;
        default:
            if (tab.toLowerCase() !== "dashboard") {
                alert("Invalid tab");
                return <DashboardLayout data="Dashboard" />;
            }
            return <DashboardLayout data={tab} />;
    }
};
