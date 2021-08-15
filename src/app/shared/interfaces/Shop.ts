import { Product } from "./Product";

export enum ShopType {
    DEFAULT = 0,
    ENTERPRISE = 1,
    VENTURE = 0
}

export interface Shop {
    id?: string;
    name: string;
    description: string;
    logo?: string;
    banner?: string;
    cellphoneNumber: number;
    email: string;
    website: string;
    type: ShopType;
    category: string;
    products?: Array<Product>;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
}
