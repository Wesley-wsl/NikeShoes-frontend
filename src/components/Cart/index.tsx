import Router from "next/router";
import React from "react";

import { ICart } from "../../@types";
import * as S from "./styles";

const Cart: React.FC<ICart> = ({ cartQuantity }) => {
    return (
        <S.Container>
            <div onClick={() => Router.push("/cart")}>
                <S.CartIcon />
                <S.CartCount>
                    <p>{cartQuantity}</p>
                </S.CartCount>
            </div>
        </S.Container>
    );
};

export default Cart;
