import { OrderStatus } from "@/Components/ordersComponents/orderStatus";

export const statusSelector = (status: OrderStatus) => {
    switch (status) {
        case OrderStatus.Taken:
            return "Taken";
        case OrderStatus.Booked:
            return "Booked";
        case OrderStatus.Returned:
            return "Returned";
        case OrderStatus.Pending:
            return "Pending";
        case OrderStatus.Cancelled:
            return "Cancelled";
    }
};
export const statusSelectorRev = (status: string): OrderStatus => {
    switch (status) {
        case "Taken":
            return OrderStatus.Taken;
        case "Booked":
            return OrderStatus.Booked;
        case "Returned":
            return OrderStatus.Returned;
        case "Pending":
            return OrderStatus.Pending;
        case "Cancelled":
            return OrderStatus.Cancelled;
        default:
            throw new Error(`Invalid status: ${status}`);
    }
};
