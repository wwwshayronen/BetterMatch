import React, { useState } from "react";
import styled from "styled-components";

const Courser = () => {
  const [count, setCount] = useState(0);

  const images = [
    "main-page-pig.jpg",
    "main-page-dollar.jpg",
    "main-page-bitcoin.jpg",
  ];

  function clickOnArrow() {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
      console.log(count);
    }
  }

  return (
    <Container>
      <CircleLeft onClick={clickOnArrow}>
        <ArrowLeft></ArrowLeft>
      </CircleLeft>
      <Image src={require(`../images/${images[count]}`)} />
      <CircleRight onClick={clickOnArrow}>
        <ArrowRight></ArrowRight>
      </CircleRight>
    </Container>
  );
};

export default Courser;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin: 5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  height: 400px;
  width: 900px;
  /* border: 2px whitesmoke solid; */
  box-shadow: 0px -1px 19px 5px rgba(158, 215, 255, 0.45);
  -webkit-box-shadow: 0px -1px 19px 5px rgba(158, 215, 255, 0.45);
  -moz-box-shadow: 0px -1px 19px 5px rgba(158, 215, 255, 0.45);
  border-radius: 15px;
  margin: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
    overflow: hidden;
  }
`;

const ArrowRight = styled.img`
  position: relative;
  bottom: 0;
  right: 4%;
  border: solid rgb(104, 194, 255);
  display: inline-block;
  border-width: 0 6px 6px 0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding: 10px;
`;

const ArrowLeft = styled.img`
  position: relative;
  bottom: 0;
  left: 4px;
  border: solid rgb(104, 194, 255);
  display: inline-block;
  border-width: 0 6px 6px 0;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  padding: 10px;
  cursor: pointer;
`;

const CircleRight = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 90px;
  width: 80px;
  height: 70px;
  /* margin: 2rem; */
  background-color: rgb(201, 237, 255);
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;

  :hover {
    background-color: rgb(38, 179, 255);
  }

  &:hover {
    ${ArrowRight} {
      border-color: white;
    }
  }

  @media (max-width: 768px) {
    right: 10px;
  }
`;

const CircleLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 90px;
  width: 80px;
  height: 70px;
  /* margin: 2rem; */
  background-color: rgb(201, 237, 255);
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;

  :hover {
    background-color: rgb(38, 179, 255);
  }

  &:hover {
    ${ArrowLeft} {
      border-color: white;
    }
  }

  @media (max-width: 768px) {
    left:10px;
  }
`;
