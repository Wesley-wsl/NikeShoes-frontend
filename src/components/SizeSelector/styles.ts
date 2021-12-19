import styled from "styled-components";

export const Container = styled.div`
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        button {
            padding: 1.7rem;
            border-radius: 0.5rem;
            cursor: pointer;
            &:hover {
                background-color: #1119;
                color: #fff9;
            }
        }
        .selected {
            color: #fff;
            background-color: #000;
        }
    }
`;

export const Title = styled.h1`
    font-size: var(--small);
    margin-bottom: 1rem;
`;
