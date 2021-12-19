import Router from "next/router";
import { destroyCookie } from "nookies";
import React, { useState } from "react";

import { IProfile } from "../../@types";
import * as S from "./styles";

const Profile: React.FC<IProfile> = ({ isAdmin }) => {
    const [showOptions, setShowOptions] = useState(false);

    function handleLogout() {
        destroyCookie(null, "nikeshoes-token");
        Router.push("/");
    }

    return (
        <S.Container>
            <S.PersonCircleIcon onClick={() => setShowOptions(!showOptions)} />
            {showOptions && (
                <S.Logout>
                    {isAdmin && (
                        <p onClick={() => Router.push("/admin")}>Dashboard</p>
                    )}

                    <p onClick={handleLogout}>Logout</p>
                </S.Logout>
            )}
        </S.Container>
    );
};

export default Profile;
