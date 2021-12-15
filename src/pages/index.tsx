import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { getApiClient } from "../services/apiSSR";
import Account from "../templates/Account";

export default function Home() {
    return <Account />;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    const { "nikeshoes-token": token } = parseCookies(ctx);
    const validJwt = await getApiClient(ctx)
        .get(`users/validjwt/${token}`)
        .then(() => true)
        .catch(() => false);

    if (token && validJwt) {
        return {
            redirect: {
                destination: "/store",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
