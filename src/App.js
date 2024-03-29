import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <TodoTemplate />
            </Container>
        </Fragment>
    );
}

function App1() {
    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <TodoTemplate />
            </Container>
        </Fragment>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #425364;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export default App;
