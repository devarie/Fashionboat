import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

// RESPONSIVE BREAKPOINTS
$bp-largest: 75em;   // 1200px
$bp-large: 62.5em;   // 1000px
$bp-medium: 50em;    // 800px;
$bp-small: 37.5em;    // 600px;

body {
    margin: 0;
    padding: 0;
    background: greenyellow;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
    

    @media only screen and (max-width: $bp-large) {
        font-size: 20%;
    }
}
`

export default GlobalStyle;