import { PersonCircle } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    user-select: none;
`;

export const PersonCircleIcon = styled(PersonCircle)`
    width: 2.5rem;
    height: 2.5rem;
    z-index: 2;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    path {
        fill: #000;
    }
`;

export const Logout = styled.div`
    background-color: #000;
    padding: 1rem;
    border-radius: 0.5rem;
    position: absolute;
    transition: all 0.2s linear;
    right: -3.3rem;
    top: 2.5rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
    animation: opacity 0.3s linear;

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    p {
        font-size: var(--x-small);
        color: #fff;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            color: #fff9;
        }
    }

    &:hover {
        opacity: 1;
    }
`;
