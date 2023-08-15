import {OrderStatus} from "@/Components/ordersComponents/orderStatus";

export type TableOrder = {
    serial_no: string,
    item: string,
    quantity: number,
    unit_price: string,
    total_price: string
};

export interface OrderTableType {
    order_no: string,
    customer: string,
    status: OrderStatus,
    amount: string,
    date_time: {
        time: string,
        date: string
    },
    orders: TableOrder[]
};