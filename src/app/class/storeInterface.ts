export interface product {
    Product_id: number;
    Product_name: string;
    Product_img: string;
    Product_desc: string;
    Product_price: number;
    Product_amount: number;
}

export interface OrderDetail {
    Product_id: number;
    Product_name: string;
    Product_amout: number;
    Product_price: number;
}

export interface Orders {
    Order_id: number;
    Order_name: string;
    Order_surname: string;
    Order_email: string;
    Order_tel: string;
    Order_address: string;
    Order_detail: OrderDetail[];
}