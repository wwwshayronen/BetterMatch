import React from "react";
import styled from "styled-components";
import Courser from "../cursor/Courser";
import About from "../About";

const SecondMain = () => {
  return (
    <Container>
      <Card>
        <Paragraph>
          {" "}
          <Title>titletitletitle</Title>
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremlorem
        </Paragraph>{" "}
        <Image
          src={require("../images/main-page-pig.jpg")}
          alt="money-spreading"
        />
      </Card>

      <Card>
        <Paragraph>
          <Title>titletitletitle</Title>
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremlorem
        </Paragraph>{" "}
        <Image
          src={require("../images/main-page-bitcoin.jpg")}
          alt="covering-in-money"
        />
      </Card>
      <Card>
        <Paragraph>
          <Title>titletitletitle</Title>
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremloremloremloremloremlorem <br />
          loremloremloremlorem
        </Paragraph>

        <Image
          src={require("../images/main-page-dollar.jpg")}
          alt="pig-money"
          style={{ marginBottom: '3rem' }}

        />
      </Card>
      <Courser />
    </Container>
  );
};

export default SecondMain;

const Container = styled.div`
  width: 100%;
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(222, 223, 233, 1) 48%,
    rgba(255, 255, 255, 1) 100%
  ); */
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
    margin: 0 auto;
  }
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  /* grid-gap: 4rem; */
  gap: 0;
  height: 300px;
  margin-top: 6rem;

  @media (max-width: 768px) {
    height: 100%;
    grid-template-columns: 1fr;
    gap: 2px;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: 2rem;
  }
`;

const Paragraph = styled.p`
  line-break: loose;
  letter-spacing: 1.2px;
  font-size: 1.2rem;
  color: #1f2667;
  padding: 2rem;
  margin: 0.5rem auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
    width: 90vw;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 90%;
  height: 300px;
  border-radius: 100px;
  margin: 0;
  padding: 0;
  box-shadow: 0 8.1px 1.4px rgba(0, 0, 0, 0.007),
    0 13.3px 3.1px rgba(0, 0, 0, 0.015), 0 16.5px 5.3px rgba(0, 0, 0, 0.023),
    0 18.8px 8.2px rgba(0, 0, 0, 0.033), 0 20.7px 12.2px rgba(0, 0, 0, 0.051),
    0 23.1px 17.9px rgba(0, 0, 0, 0.061), 0 27px 26.8px rgba(0, 0, 0, 0.065),
    0 34.3px 42.7px rgba(0, 0, 0, 0.067), 0 50px 80px rgba(0, 0, 0, 0.07);
  @media (max-width: 768px) {
    width: 70%;
    height: 30vh;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 0.6rem; 
`