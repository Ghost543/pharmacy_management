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
