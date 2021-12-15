import styled from "styled-components";

export const BackgroundContainer = styled.div`
    background-image: url("/assets/background/backgroundShoes.png");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    color: #fff;
`;

export const Aside = styled.main`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--black-transparent);
    width: 50rem;

    @media (max-width: 691px) {
        width: 100%;
    }
`;
