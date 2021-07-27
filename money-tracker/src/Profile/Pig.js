import React from "react";
import styled from "styled-components";
import "./pig.css";

const Pig = ({ display }) => {
  return (
    <Container style={{ display: display }}>
      <div class="pig-face"></div>
      <div class="pupils">
        <div class="pupil"></div>
        <div class="second-pupil"></div>
      </div>
      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="nose"></div>
      <div class="nostrils">
        <div class="nostril"></div>
        <div class="nostril"></div>
      </div>
      <div class="ears">
        <div class="ear-right"></div>
        <div class="ear-left"></div>
      </div>
    </Container>
  );
};

export default Pig;

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  left: 100px;
  opacity: 0.3;
  @media (max-width: 768px) {
    position: relative;
    bottom: 50px;
    left: 30px;
    overflow: hidden;
  }
`;
