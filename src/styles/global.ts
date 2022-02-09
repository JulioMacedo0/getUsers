import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 

:root {
    --background: #0d1117;
    --background-lite: #161b22;
    --repositoriesTitle: #58a6ff;
    --white: #c9d1d9;
    --gray: #8B949E;
 }


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
}

button {
    cursor: pointer; 
}

` 
