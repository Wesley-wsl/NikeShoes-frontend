import styled from "styled-components";

export const Container = styled.main`
    max-width: 110rem;
    margin: 0 auto;
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
            font-size: var(--x-medium);
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
