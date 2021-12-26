import styled from "styled-components";

export const Container = styled.main`
    max-width: 110rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const ProductInformation = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    div:nth-child(1) {
        p:nth-child(1) {
            font-weight: 600;
            text-transform: uppercase;
            font-size: var(--x-small);
        }

        h1 {
            font-size: var(--medium);
            padding: 1.5rem;
        }

        p:nth-child(3) {
            font-size: 1.7rem;
            max-width: 50rem;
            opacity: 0.8;
            letter-spacing: 0.1rem;
            line-height: 3rem;
            margin-bottom: 2rem;
            height: 8.05rem;
            overflow: hidden;
        }
    }

    @media (max-width: 65rem) {
        div:nth-child(1) {
            h1 {
                font-size: var(--x-medium);
            }

            p:nth-child(3) {
                font-size: var(--x-small);
            }
        }
    }

    @media (max-width: 44rem) {
        display: flex;
        flex-direction: column;
    }
`;

export const Product = styled.section`
    border-radius: 50%;
    border: 0.1rem solid #0009;
    width: 72rem;
    height: 15rem;
    margin: 0 auto;
    position: relative;
    z-index: -10000;
    transition: all 0.2s linear;
    margin-top: 1rem;

    .img {
        position: absolute;
        top: -37rem;
        right: 50px;
    }

    @media (max-width: 65rem) {
        width: 40rem;
        height: 10rem;
        .img {
            width: 83%;
            height: 40%;
            top: -20rem;
            right: 3rem;
        }
    }

    @media (max-width: 44rem) {
        margin-top: 9rem;
        .img {
            top: -19rem;
            right: 3rem;
        }
    }

    @media (max-width: 27rem) {
        width: 25rem;

        .img {
            top: -10rem;
        }
    }
`;

export const Manager = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    > div {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        align-items: center;
        text-align: center;

        div {
            margin-right: 2rem;
            font-weight: 700;
            font-size: var(--x-small);
            transition: all 0.2s linear;
            &:hover {
                transform: scale(1.2);
            }
            user-select: none;
        }
    }
    animation: opacity 1.5s linear;
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media (max-width: 44rem) {
        padding: 2rem 0;
    }
`;

export const Button = styled.button`
    border: 0.1rem solid #000;
    background-color: #000;
    color: #fff;
    padding: 1rem;
    transition: all 0.2s linear;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0.4rem;
    cursor: pointer;
    border-radius: 0.2rem;
    a {
        text-decoration: none;
    }
    &:hover {
        background-color: #fff;
        color: #000;

        a {
            color: #000;
        }
    }
`;
