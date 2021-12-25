import { Trash } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 0.1rem solid #00000038;
    display: ${(props: { display: string }) => props.display};
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    max-width: 83rem;
    height: 12rem;
    margin: 2rem auto;

    @media (max-width: 30rem) {
        flex-direction: column;
        height: auto;
        gap: 2rem;
        text-align: center;
        padding: 1rem;
    }

    h2 {
        font-size: var(--small);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        width: 16rem;
    }

    p {
        font-size: var(--small);
        font-weight: 600;
    }

    .price {
        width: 8rem;
        text-align: center;
    }
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        font-size: var(--small);
        padding: 0 1rem;
        border: 0.1rem solid #0001;
        background-color: #fff9;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            transform: scale(120%);
        }
    }
`;

export const TrashIcon = styled(Trash)`
    width: 2.5rem;
    height: 2.5rem;
    color: red;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(110%);
    }
`;
