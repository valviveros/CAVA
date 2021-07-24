import { Shop } from "./Shop";

export enum UserType {
    DEFAULT = 0,
    OWNER = 0,
    ADMIN = 1
}

export interface User {
    $key: string;
    email: string;
    phoneNumber?: {
        countryCode: string;
        dialCode: string;
        e164Number: string;
        internationalNumber: string;
        nationalNumber: string;
        number: string;
    };
    name: string;
    lname: string;
    password?: string;
    shop?: Shop;
}
