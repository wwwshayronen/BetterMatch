import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

const MainPage = () => {
  return (
    <Main>
      <Nav />
    </Main>
  );
};

export default MainPage;

const Main = styled.main`
  background-color: #6e00d6;
  @media (max-width: 768px) {
    width: 99vw;
    height: 100vh;
  }
`;
