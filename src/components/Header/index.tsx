import React from "react";

import { IHeader } from "../../@types";
import Cart from "../Cart";
import Profile from "../Profile";
import * as S from "./styles";

const Header: React.FC<IHeader> = ({ setIsMan, cartQuantity }) => {
    return (
        <S.Container data-aos="fade-down">
            <S.NikeLogo alt="Logo nike" />

            <nav>
                <ul>
                    <li onClick={() => setIsMan(true)}>Men</li>
                    <li onClick={() => setIsMan(false)}>Women</li>
                </ul>
            </nav>

            <div>
                <Profile />
                <Cart cartQuantity={cartQuantity} />
            </div>
        </S.Container>
    );
};

export default Header;
