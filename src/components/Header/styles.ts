import { PersonCircle, Cart } from "@styled-icons/bootstrap";
import styled, { css } from "styled-components";

import Logo from "../../../public/assets/icons/Logo.svg";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    max-width: 110rem;
    margin: 0 auto;
    align-items: center;

    nav > ul {
        display: flex;
        gap: 3rem;

        li {
            font-size: var(--small);
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.15s linear;
            text-transform: uppercase;
            &:hover {
                opacity: 0.5;
            }
        }
    }

    div {
        display: flex;
        gap: 2rem;
    }
`;

export const NikeLogo = styled(Logo)`
    path {
        fill: #000;
    }
`;

export const iconCSS = css`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    transition: opacity 0.15s linear;

    path {
        fill: #000;
    }

    &:hover {
        opacity: 0.5;
    }
`;

export const PersonCircleIcon = styled(PersonCircle)`
    ${iconCSS}
`;

export const CartIcon = styled(Cart)`
    ${iconCSS}
`;
