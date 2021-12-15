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

export const Account = styled.section`
    width: 25rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5rem auto;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2.5rem;
    }

    h1 {
        font-size: var(--medium);
    }

    form {
        div {
            position: relative;
            input {
                background-color: transparent;
                border-bottom: 1px solid #fff;
                padding: 1rem;
                color: #fff;
                width: 100%;
                padding-right: 3rem;
                margin-bottom: 2.5rem;
                outline: none;
            }

            input::placeholder {
                color: #fff9;
                font-size: 1.7rem;
            }

            .icon {
                position: absolute;
                top: 10%;
                right: 0;
            }

            .password {
                cursor: pointer;
            }
        }

        button {
            padding: 0.9rem;
            width: 100%;
            border-radius: 0.6rem;
            margin-bottom: 2rem;
            cursor: pointer;
            font-size: 1.8rem;
            font-weight: 600;
            transition: 0.2s ease-in;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }

    > p {
        font-size: var(--x-small);
    }
`;
