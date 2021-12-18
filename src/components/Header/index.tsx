import React from "react";

import { IHeader } from "../../@types";
import * as S from "./styles";

const Header: React.FC<IHeader> = ({ setIsMan }) => {
    return (
        <S.Container>
            <S.NikeLogo />

            <nav>
                <ul>
                    <li onClick={() => setIsMan(true)}>Men</li>
                    <li onClick={() => setIsMan(false)}>Women</li>
                </ul>
            </nav>

            <div>
                <S.PersonCircleIcon />
                <S.CartIcon />
            </div>
        </S.Container>
    );
};

export default Header;
