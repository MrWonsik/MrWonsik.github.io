import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#fcfdff",
  textColor: "#000b2a",
  accentColor: "#0134bd",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.textColor};
    font-size: 25px;
    margin: 0;
    background: ${(props) => props.theme.mainColor};
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
