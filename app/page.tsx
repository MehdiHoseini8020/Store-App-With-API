"use client";
import React from "react";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import Header from "./Header";
import { Container, GlobalStyle } from "./StyledComponent/Landing";
import Main from "./MainLanding/page";

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>
    </React.Fragment>
  );
}
