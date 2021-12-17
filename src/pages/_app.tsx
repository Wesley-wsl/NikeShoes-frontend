import { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { ToastContainer, Slide } from "react-toastify";

import { AuthProvider } from "../contexts/AuthContext";
import GlobalStyles from "../styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.min.css";

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
            <NextNprogress color="#ff0000" startPosition={0.5} />

            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable={true}
                pauseOnHover
                transition={Slide}
                theme="dark"
            />
        </>
    );
}

export default MyApp;
