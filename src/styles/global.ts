import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        color: #E7EDF4;
        -webkit-font-smoothing:antialised;
    }
    body, input, textarea, button{
        font: 400 1rem Nunito, 'sans-serif'
    }
`