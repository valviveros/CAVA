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
    phone_numbers: Array<string>;
    email: string;
    website: string;
    type: ShopType;
    category: Array<string>;
    products: Array<Product>
    social_networks?: { whatsapp?: string; instragram?: string; facebook?: string; }
}
