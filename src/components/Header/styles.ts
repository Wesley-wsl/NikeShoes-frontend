import { PersonCircle } from "@styled-icons/bootstrap";
import styled, { css } from "styled-components";

import Logo from "../../../public/assets/icons/Logo.svg";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    max-width: 110rem;
    margin: 0 auto;
    align-items: center;
    z-index: 999;

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

    @media (max-width: 27rem) {
        > svg {
            display: none;
        }
    }
`;

export const NikeLogo = styled(Logo)`
    path {
        fill: #000;
    }
    cursor: pointer;
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
