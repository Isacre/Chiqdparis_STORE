import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}
body {
    background-color: #f2f3f4; 
    overflow-x: hidden;

    a{ 
        color: black
    }
}

`;

export default GlobalStyle;
