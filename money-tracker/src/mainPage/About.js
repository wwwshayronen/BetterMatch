import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Pig from "../Profile/Pig";
const About = (props) => {
  const [width, setWidth] = useState("90%");
  const [margin, setMargin] = useState("0");
  const homePageBackGroundColor = props.homePageBackGroundColor || "#eceff1";
  const homePageBackFontColor = props.homePageBackFontColor || "#6e00d6";

  useEffect(() => {
    if (props.styleObj) {
      setWidth(props.styleObj.width);
      setMargin(props.styleObj.margin);
    } else {
      console.log("props.styleObj are not defined.")
    }
  },[props.styleObj])
  return (
    <Container
      style={{
        backgroundColor: `${homePageBackGroundColor}`,
        width: `${width}`,
        margin: `${margin}`,
      }}
    >
      <MainTitle style={{ color: homePageBackFontColor }}>About</MainTitle>
      <Per style={{ color: homePageBackFontColor }}>
        Today, in 2020, during COVID-19, there are many people around the world that have no money. After looking at the situation from my perspective, I decided to build a platform that will help everyone to know better - HOW TO MANAGE MONEY AND BUDGET.
        <Pig display={props.displayPig} />
      </Per>
    </Container>
  );
};
export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
  padding: 0;
  margin-top: 3rem;
  margin-left: 2rem;
  overflow: hidden;
  background-color: #eceff1;
  border: #6e00d6 1px solid;

  @media (max-width: 768px) {
    margin-bottom: auto;
  }
`;

const MainTitle = styled.h1`
  margin-top: 3rem;
  color: #6e00d6;
  font-weight: 700;
  margin-left: 0.5rem;
  margin-bottom: 0.2rem;
  font-size: 2rem;
`;

// const SecondTitle = styled.h2`
//     color: lightblue;
//     font-weight: 500;
//     letter-spacing: 2px;
// `
const Per = styled.p`
  color: #6e00d6;
  opacity: 0.9;
  font-size: 1.6rem;
  width: 80%;
  margin-left: 0.5rem;
`;
