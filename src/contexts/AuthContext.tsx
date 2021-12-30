import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import { createContext, useEffect } from "react";

import { errorToast } from "../helpers/toast";
import { api } from "../services/api";

interface ISignInData {
    email: string;
    password: string;
}

interface IAuthContext {
    signIn: (data: ISignInData) => Promise<void>;
}

interface IChildren {
    children: JSX.Element;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IChildren) {
    useEffect(() => {
        const { "nikeshoes.token": token } = parseCookies();

        if (token) {
            api.defaults.headers["Authorization"] = `Bearer ${token}`;
        }
        if (!token) Router.push("/");
    }, []);

    async function signIn({ email, password }: ISignInData) {
        await api
            .post("users/login", { email, password })
            .then(response => {
                setCookie(undefined, "nikeshoes-token", response.data, {
                    maxAge: 60 * 60 * 1, // 1 hour
                });
                Router.reload();
            })
            .catch(error => {
                console.log(error);
                errorToast(error.response.data.error);
            });
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
