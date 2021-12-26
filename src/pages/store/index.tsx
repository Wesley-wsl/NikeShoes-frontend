import Aos from "aos";
import "aos/dist/aos.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";

import ArrowLeft from "../../../public/assets/icons/ArrowLeft.svg";
import ArrowRight from "../../../public/assets/icons/ArrowRight.svg";
import { IProducts, IProductsSeparated } from "../../@types";
import Header from "../../components/Header";
import SizeSelector from "../../components/SizeSelector";
import { errorToast, successToast } from "../../helpers/toast";
import { api } from "../../services/api";
import { getApiClient } from "../../services/apiSSR";
import * as S from "../../styles/pages/Store";

const Store: React.FC<IProductsSeparated> = ({ man, woman, countCart }) => {
    const [isMan, setIsMan] = useState(true);
    const [products, setProducts] = useState<IProducts[]>([]);
    const [indexProducts, setIndexProducts] = useState(0);
    const [cartQuantity, setCartQuantiity] = useState(countCart);
    function nextProduct() {
        if (indexProducts + 1 > products.length - 1) return;
        setIndexProducts(indexProducts + 1);
    }

    function previousProduct() {
        if (indexProducts - 1 < 0) return;
        setIndexProducts(indexProducts - 1);
    }

    async function handleAddProductInCart() {
        await api
            .post(`cart/${products[indexProducts]._id}`)
            .then(() => {
                successToast("Product added in your cart");
                setCartQuantiity(cartQuantity + 1);
            })
            .catch((error: { response: { data: { error: string } } }) =>
                errorToast(error.response.data.error),
            );
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
        setIndexProducts(0);
        if (isMan === true) setProducts(man);
        if (isMan === false) setProducts(woman);
    }, [isMan, man, woman]);

    return (
        <>
            <Header setIsMan={setIsMan} cartQuantity={cartQuantity} />
            <S.Container>
                {products ? (
                    <>
                        <S.ProductInformation data-aos="flip-right">
                            <div>
                                <p>{isMan ? "Men's Shoe" : "Women's Shoe"}</p>
                                <h1>{products[indexProducts]?.name}</h1>

                                <p>{products[indexProducts]?.description}</p>
                                {products[indexProducts]?.video_url && (
                                    <>
                                        <S.Button>
                                            <a
                                                href={
                                                    products[indexProducts]
                                                        ?.video_url
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                PLAY VIDEO
                                            </a>
                                        </S.Button>
                                    </>
                                )}
                            </div>
                            <SizeSelector />
                        </S.ProductInformation>

                        <S.Product className="product" data-aos="flip-right">
                            <span className="img">
                                {products[indexProducts] ? (
                                    <Image
                                        src={
                                            products[indexProducts]
                                                ?.product_image
                                        }
                                        width="600"
                                        height="600"
                                    />
                                ) : (
                                    ""
                                )}
                            </span>
                        </S.Product>

                        <S.Manager>
                            <div>
                                <div onClick={previousProduct}>
                                    <p>Prev</p>
                                    <ArrowLeft />
                                </div>
                                <div onClick={nextProduct}>
                                    <p>Next</p>
                                    <ArrowRight />
                                </div>
                            </div>

                            <S.Button onClick={handleAddProductInCart}>
                                Add to cart - ${products[indexProducts]?.price}
                            </S.Button>
                        </S.Manager>
                    </>
                ) : (
                    "Loading..."
                )}
            </S.Container>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const { "nikeshoes-token": token } = parseCookies(ctx);

    const validJwt = await getApiClient(ctx)
        .get(`users/validjwt/${token}`)
        .then(() => true)
        .catch(() => false);

    if (!token || !validJwt) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const woman = await getApiClient(ctx).get("products?category=Woman");
    const man = await getApiClient(ctx).get("products?category=Man");

    const cartUser = await getApiClient(ctx).get("cart");
    const productNumbers: number[] = [0];
    await cartUser.data.cartUser.forEach((element: { quantity: number }) =>
        productNumbers.push(element.quantity),
    );

    const countCart = productNumbers.reduce(
        (acc = 0, element) => acc + element,
    );

    return {
        props: {
            woman: woman.data.listProducts,
            man: man.data.listProducts,
            countCart,
        },
    };
};

export default Store;
