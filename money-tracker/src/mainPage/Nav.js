import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import About from "./About";
import { useAuth0 } from "@auth0/auth0-react";
import MakeItRain from "../assets/MakeItRain";

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  // check if the width of the user device is less than 768.
  // if it is, change svg size by passing props.

  function onClickElementEffect(e) {
    e.target.style.border = "15px";
  }
  return (
    <>
      <TitleContainer>
        <>
          <UnorderedList style={{ fontSize: "16px", width: "100%" }}>
            <ListItem>
              <h2 style={{ fontSize: "1.2rem", marginRight: "auto", color: "white" }}>
                MONEZ 💰
              </h2>
            </ListItem>
            <ListItem>
              <Link
                onClick={() => loginWithRedirect()}
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>
            </ListItem>
            <ListItem>
              <Link
                onClick={() => loginWithRedirect()}
                style={{
                  color: "white",
                }}
              >
                Sign Up
              </Link>
            </ListItem>
          </UnorderedList>
        </>
      </TitleContainer>
      <Header>
        <ParagraphContainer>
          <h1
            style={{
              fontSize: "1.7rem",
              color: "#c9edff",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            FREE money saver platform for everybody
          </h1>
          <Paragraph>
            Our main mission is to help you understand how can you manage your money, increase your income and in an efficient way - decrease your expenses.
          </Paragraph>
        </ParagraphContainer>
        <FormStyle onSubmit="">
          <Button
            type="submit"
            value="sign up for free!"
            onClick={onClickElementEffect}
          ></Button>
          <MakeItRain />
        </FormStyle>
        <About
          homePageBackGroundColor={"#6e00d6"}
          homePageBackFontColor={"white"}
          displayPig={"none"}
        />
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.nav`
  background-color: #6e00d6;
  /* background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(110, 0, 214, 1) 35%,
    rgba(23, 28, 29, 1) 100%
  ); */
  color: #e6f4f1;
  height: 100%;
  border-radius: 0 0 20px 20px;
  /* margin-top: 15rem; */
  @media (max-width: 768px) {
    width: 101%;
    padding: 0;
    border-radius: none;
    border-radius: 0;
    /* margin-top: 5px; */
  }
`;

const TitleContainer = styled.div`
  position: relative;
  bottom: 0;
  margin: 0;
  color: #ebfdfe;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 0.7px;

  @media (max-width: 768px) {
  }
`;

const UnorderedList = styled.ul`
  position: fixed;
  top: 0;
  bottom: 10;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  letter-spacing: 1.2px;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: #6e00d6;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: left;
    height: 50px;
    overflow: visible;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const ListItem = styled.li`
  text-align: left;
  /* margin-left: 1rem; */
  padding: 1.2rem;
  font-size: 1.2rem;
  list-style: none;
  text-decoration: none;
  color: white;
  cursor: pointer;

  :nth-child(1) {
    margin-right: auto;
  }

  :nth-child(1):hover {
    opacity: 0.9;
    text-decoration: underline;
  }

  :nth-child(2):hover {
    opacity: 0.9;
    text-decoration: none;
  }

  :nth-child(3):hover {
    color: whitesmoke;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    margin-bottom: auto;
    height: 0;
    font-size: 15px;
    :nth-child(2) {
      color: yellowgreen;
    }
  }
`;
const FormStyle = styled.form`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: #ffffff;
  /* border-bottom-left-radius: 27%; 
  border-bottom-right-radius: 27%;  */
  /* margin: 1rem; */
  padding: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  border: #52b788 1.5px solid;
  color: #52b788;
  background-color: white;
  font-size: 1rem;
  margin-left: 2rem;
  padding: 1.05rem;
  margin: 3px;
  margin-bottom: 0;
  width: 160px;
  height: 11px;
  border-radius: 10px;
  outline-width: 0;

  ::placeholder {
    color: #52b788;
    opacity: 1;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.input`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  margin-bottom: 0;
  width: 250px;
  height: 37px;
  margin-right: 1rem;
  text-align: center;
  color: white;
  background-color: #52b788;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline-width: 0;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 80%;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin: 1rem;
    margin-top: 7rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
  width: 33%;

  @media (max-width: 768px) {
    width: 70%;
    padding: 0;
  }
`;

// const Image = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 20px;
//   margin: 0;
//   padding: 0;
//   margin-left: 50px;
// `;
