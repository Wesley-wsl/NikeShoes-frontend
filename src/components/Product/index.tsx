import Image from "next/image";
import React, { useState } from "react";

import { IProductsInCart } from "../../@types";
import { errorToast, successToast } from "../../helpers/toast";
import { api } from "../../services/api";
import * as S from "./styles";

const Products: React.FC<IProductsInCart> = ({
    product_image,
    name,
    price,
    _id,
    setTotal,
    total,
    quantity,
}) => {
    const [display, setDisplay] = useState("flex");
    const [quantityProduct, setQuantity] = useState(quantity);

    async function handleRemoveProduct() {
        await api
            .delete(`cart/${_id}`)
            .then(() => {
                successToast("Product removed from your cart");
                setDisplay("none");
                setTotal(total - quantityProduct * price);
            })
            .catch((error: { response: { data: { error: string } } }) =>
                errorToast(error.response.data.error),
            );
    }

    async function handleDecrementProduct() {
        if (quantityProduct > 1) {
            setQuantity(quantityProduct - 1);
            setTotal(total - price);

            await api.put(`cart/${_id}`, {
                quantity: quantityProduct - 1,
            });
        }
    }

    async function handleIncrementProduct() {
        setQuantity(quantityProduct + 1);
        setTotal(total + price);

        await api.put(`cart/${_id}`, {
            quantity: quantityProduct + 1,
        });
    }

    return (
        <S.Container display={display}>
            <Image
                src={product_image}
                width="150"
                height="150"
                alt={`Nike shoes ${name}`}
            />
            <h2 title={name}>{name}</h2>
            <S.Counter>
                <button
                    data-testid="decrement"
                    onClick={handleDecrementProduct}
                >
                    -
                </button>
                <p>{quantityProduct}</p>
                <button
                    data-testid="increment"
                    onClick={handleIncrementProduct}
                >
                    +
                </button>
            </S.Counter>
            <p className="price">${quantityProduct * price}</p>
            <S.TrashIcon
                onClick={handleRemoveProduct}
                aria-label="Trash icon, click to remove product from cart"
            />
        </S.Container>
    );
};

export default Products;
