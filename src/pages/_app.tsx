import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>NikeShoes</title>
                <link
                    rel="shortcut icon"
                    href="/assets/icons/Logo.svg"
                    type="image/x-icon"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bellefair&family=DM+Sans:wght@400;500;700&family=Raleway:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <meta
                    name="description"
                    content="NikeShoes is a fictional e-commerce focused on selling nike shoes. "
                />
                <meta name="theme-color" content="#070707" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
