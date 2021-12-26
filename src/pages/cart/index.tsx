import { GetServerSideProps } from "next";
import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";

import { IProducts, IProductsArray } from "../../@types";
import { NikeLogo } from "../../components/Header/styles";
import Product from "../../components/Product";
import { errorToast, successToast } from "../../helpers/toast";
import { api } from "../../services/api";
import { getApiClient } from "../../services/apiSSR";
import * as S from "../../styles/pages/Cart";
import { Button } from "../../styles/pages/Store";

const Cart: React.FC<IProductsArray> = ({ products }) => {
    useEffect(() => {
        if (products.length >= 1) {
            const arrayTotal: number[] = [];
            products.forEach(element =>
                arrayTotal.push(element.price * element.quantity),
            );
            const findTotal = arrayTotal.reduce(
                (previousValue = 0, currentValue) =>
                    previousValue + currentValue,
            );
            setTotal(findTotal);
        }
    }, [products]);
    const [total, setTotal] = useState(0);

    async function handleCheckout() {
        await api
            .post("/payment", {
                products,
            })
            .then(response => {
                successToast("Redirect to checkout...");
                Router.push(response.data.url);
            })
            .catch(() => errorToast("Don't exists products in your cart"));
    }
    return (
        <>
            <S.Header data-aos="fade-down">
                <NikeLogo />

                <div
                    data-testid="backToStore"
                    onClick={() => Router.push("/store")}
                >
                    <p>Back to store</p>
                </div>
            </S.Header>

            <S.Container data-aos="zoom-in-down">
                <h1>Shopping Cart</h1>
                <hr />
                {products.length >= 1 ? (
                    products.map((product, index: number) => (
                        <Product
                            product_image={product.product_image}
                            key={index}
                            name={product.name}
                            price={product.price}
                            _id={product._id}
                            setTotal={setTotal}
                            total={total}
                            quantity={product.quantity}
                        />
                    ))
                ) : (
                    <S.Empty>
                        <S.CartXFillIcon />
                    </S.Empty>
                )}
                <S.GoCheckout>
                    <h2>Total: ${total}</h2>
                    <Button data-testid="checkout" onClick={handleCheckout}>
                        Proceed to checkout
                    </Button>
                </S.GoCheckout>
            </S.Container>
        </>
    );
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async ctx => {
    const { "nikeshoes-token": token } = parseCookies(ctx);

    const validJwt = await getApiClient(ctx)
        .get(`users/validjwt/${token}`)
        .then(() => true)
        .catch(() => false);

    if (!token || !validJwt) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const userCart = await getApiClient(ctx).get(`cart`);
    const products: IProducts[] = [];

    await userCart.data.cartUser.forEach(
        (element: { productId: IProducts[]; quantity: number }) => {
            element.productId[0].quantity = element.quantity;
            products.push(element.productId[0]);
        },
    );

    return {
        props: {
            products,
        },
    };
};
