import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background-color: #F7F5FF;
    min-height: 100%;
  }

  body {
    align-items: center;
    background: linear-gradient(145deg, #F7F5FF 0%, #FAFBFF 30%, #EAF2FF 65%, #F5F3FF 100%);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
