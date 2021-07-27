import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RecentActivities from "../Profile/RecentActivities";
import Save from "../Save";
import TransactionsUI from "../income/TransactionsUI";

const MobileNav = () => {
  // Dynamic visibility
  const [visibility, setVisibility] = useState("none");

  // Menu open and close on click
  const openAndCloseMenuOnClick = () => {
    if (visibility == "visible") {
      setVisibility("hidden");
    } else {
      setVisibility("visible");
    }
  };

  return (
    <div>
      <MenuBtn onClick={openAndCloseMenuOnClick}>
        <BtnLine></BtnLine>
        <BtnLine></BtnLine>
        <BtnLine></BtnLine>
      </MenuBtn>
      <MenuOverlay style={{ visibility: visibility }}>
        <Link to="/profile">
          <Logo
            onClick={() => {
              openAndCloseMenuOnClick();
            }}
          >
            <a style={{ color: "white" }}>MONEZ 💰</a>
          </Logo>
        </Link>
        <Nav>
          <CloseButton onClick={openAndCloseMenuOnClick}>X</CloseButton>
          <ul>
            <Link to="/profile/budget">
              <Item
                onClick={() => {
                  openAndCloseMenuOnClick();
                }}
              >
                Budget
              </Item>
            </Link>{" "}
            <Link to="/profile/goals">
              <Item
                onClick={() => {
                  openAndCloseMenuOnClick();
                }}
              >
                Goals
              </Item>
            </Link>
            <Link to="/profile/marketplace">
              <Item
                onClick={() => {
                  openAndCloseMenuOnClick();
                }}
              >
                Marketplace
              </Item>
            </Link>
            <Link to="/profile/transactions">
              <Item
                onClick={() => {
                  openAndCloseMenuOnClick();
                }}
              >
                Transactions
              </Item>
            </Link>
          </ul>
        </Nav>
      </MenuOverlay>
    </div>
  );
};

export default MobileNav;

const MenuBtn = styled.div`
  display: block;
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 55px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BtnLine = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: white;
`;

const MenuOverlay = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: #000000;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  opacity: 1;
`;

const Nav = styled.nav`
  align-self: center;
  margin-left: 3rem;
  margin-bottom: 3rem;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 35px;
  top: 55px;
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
  font-style: arial;
  :hover {
    color: purple;
  }
`;

const Item = styled.li`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: white;
  margin-bottom: 9px;

  :focus {
    color: #6e00d6;
  }
`;

const Logo = styled.div`
  position: static;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #6e00d6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;

  :hover {
    border: 6px solid white;
  }
`;
