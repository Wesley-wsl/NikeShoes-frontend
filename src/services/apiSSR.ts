import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: GetServerSidePropsContext) {
    const { "nikeshoes-token": token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: "http://localhost:3333/",
    });

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return api;
}
