import Router from "next/router";
import { destroyCookie } from "nookies";
import React, { useState } from "react";

import * as S from "./styles";

const Profile: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);

    function handleLogout() {
        destroyCookie(null, "nikeshoes-token");
        Router.push("/");
    }

    return (
        <S.Container>
            <S.PersonCircleIcon
                data-testid="openLogout"
                onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
                <S.Logout>
                    <p data-testid="logout" onClick={handleLogout}>
                        Logout
                    </p>
                </S.Logout>
            )}
        </S.Container>
    );
};

export default Profile;
