import { Cart } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    cursor: pointer;

    div {
        &:hover {
            opacity: 0.5;
        }
    }
`;

export const CartCount = styled.div`
    border-radius: 100%;
    font-size: var(--x-small);
    padding: 0.5rem;
    background-color: #000;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    p {
        color: #fff;
    }
`;

export const CartContent = styled.section`
    width: 50rem;
    height: 50rem;
    background-color: #000;
    z-index: 3;
    position: absolute;
    top: 3rem;
    right: 0;
    animation: opacity 0.3s linear;

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const CartIcon = styled(Cart)`
    width: 2.5rem;
    height: 2.5rem;

    path {
        fill: #000;
    }
`;
