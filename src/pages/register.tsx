import React from "react";

import Register from "../components/Register";
import AccountTemplate from "../templates/Account";

const SignUp: React.FC = () => {
    return (
        <AccountTemplate>
            <Register />
        </AccountTemplate>
    );
};

export default SignUp;
