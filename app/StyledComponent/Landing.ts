import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* max-width: 1440px; */
  /* background-color: gray; */
`;
