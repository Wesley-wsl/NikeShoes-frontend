import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --black-transparent:  #000000bf;

    --x-small: 1.3rem;
    --small: 2.0rem;
    --medium: 4.8rem;
    --large: 6rem;
}


* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: Raleway,--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    color:#fff;
}

`;

export default GlobalStyles;
