import React from "react";

import * as S from "./styles";

const AccountTemplate: React.FC = ({ children }) => {
    return (
        <S.BackgroundContainer>
            <S.Aside>{children}</S.Aside>
        </S.BackgroundContainer>
    );
};

export default AccountTemplate;
