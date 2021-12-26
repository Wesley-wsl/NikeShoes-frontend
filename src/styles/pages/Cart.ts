import { CartXFill } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 110rem;
    margin: 1rem auto;
    padding: 0 2rem;

    div {
        background-color: #000;
        padding: 1rem;
        color: #fff;
        font-size: var(--x-small);
        font-weight: 700;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: all 0.2s linear;
        border: 1px solid #000;

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
`;

export const Container = styled.main`
    max-width: 110rem;
    margin: 0 auto;
    padding: 0 2rem;

    hr {
        max-width: 50rem;
        height: 0.1rem;
        background-color: #00000059;
        margin: 0 auto;
    }

    h1 {
        font-size: var(--medium);
        text-align: center;
        letter-spacing: 1rem;
        padding-bottom: 1rem;

        @media (max-width: 30rem) {
            font-size: var(--x-medium);
        }
    }
`;

export const GoCheckout = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 80rem;
    margin: 0 auto 2rem auto;
    align-items: center;
    h2 {
        font-size: var(--small);
    }
`;

export const CartXFillIcon = styled(CartXFill)`
    width: 10rem;
    height: 10rem;
    color: #000;
`;

export const Empty = styled.div`
    display: flex;
    justify-content: center;
`;
