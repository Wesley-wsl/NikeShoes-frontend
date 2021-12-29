import { Dispatch, SetStateAction } from "react";

export interface IProducts {
    category: string;
    description: string;
    name: string;
    price: number;
    product_image: string;
    video_url: string;
    quantity: number;
    _id: string;
    __v?: number;
}

export interface IProductsSeparated {
    man: Array<IProducts>;
    woman: Array<IProducts>;
    isAdmin: boolean;
    countCart: number;
}

export interface IProductsArray {
    products: [
        {
            category: string;
            description: string;
            name: string;
            price: number;
            product_image: string;
            video_url?: string;
            quantity: number;
            _id: string;
            __v?: number;
        },
    ];
}

export interface IProductsInCart {
    product_image: string;
    name: string;
    price: number;
    _id: string;
    setTotal: Dispatch<SetStateAction<number>>;
    quantity: number;
    total: number;
}

export interface IHeader {
    setIsMan: (isMan: boolean) => void;
    cartQuantity: number;
}

export interface ICart {
    cartQuantity: number;
}
