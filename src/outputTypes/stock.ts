export interface ItemsData {
    id: string;
    name: string;
    brand: string;
    quantity: number;
    serial_no: string;
    mfd: Date;
    exd: Date;
    selling_price: number;
    buying_price: number;
}

export interface StockData {
    id: string;
    stock_no: string;
    items: ItemsData[];
    no_items: number;
    distributor: string;
    date: Date;
    quantity: number;
    cost: number;
}

export interface ItemRouter {
    id: string;
    name: string;
    brand: string;
    quantity: number;
    serial_no: string;
    mfd: Date;
    exd: Date;
    selling_price: number;
    buying_price: number;
    stock: {
        id: string;
        stock_no: string;
        date: Date;
    };
}
