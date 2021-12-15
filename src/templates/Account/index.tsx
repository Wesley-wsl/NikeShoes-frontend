import React from "react";

import * as S from "./styles";

const AccountTemplate: React.FC = ({ children }) => {
    return (
        <S.BackgroundContainer>
            <S.Aside>
                <S.Account>{children}</S.Account>
            </S.Aside>
        </S.BackgroundContainer>
    );
};

export default AccountTemplate;
