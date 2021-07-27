import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import RecentActivities from "./RecentActivities";
import Save from "../Save";
import TransactionsUI from "../income/TransactionsUI";
import SavingGoals from "./Saving-goals/SavingGoals";
import MarketPlace from "./Finance-advisers/MarketPlace";
import Profile from "./Profile";

const UserNav = () => {
  let { url } = useRouteMatch();

  return (
    <Nav>
      <UnorderedList>
        <Link to={`/profile`}>
          <Button
            style={{ backgroundColor: "#6e00d6", borderTopRightRadius: "10px", color: "white" }}
          >
            MONEZ 💰
          </Button>
        </Link>

        {/* <Button onClick={() => setComponent(<TransactionsUI />)}>
          Transactions
          <br />
          🐖
        </Button> */}

        <Link to={`${url}/budget`}>
          <Button>
            Budget planing
            <br />
            🐖
          </Button>
        </Link>

        <Link to={`${url}/goals`}>
          <Button>
            Saving goals
            <br />
            🐖
          </Button>
        </Link>

        <Link to={`${url}/marketplace`}>
          <Button>
            Advisers marketplace
            <br />
            🐖
          </Button>
        </Link>
        <Link to={`${url}/transactions`}>
          <Button>
            Trans
            <br />
            -actions
            <br />
            🐖
          </Button>
        </Link>
      </UnorderedList>
    </Nav>
  );
};

export default UserNav;

const Nav = styled.nav`
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  overflow-x: hidden;
  bottom: 0;
  top: 0;
  height: 100%;
  background-color: whitesmoke;
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
  z-index: 10;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);

  @media (max-width: 768px) {
    display: none;
  }
`;

const UnorderedList = styled.ul`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 127px;
  border-top-right-radius: 10px;
  flex-direction: column;
  bottom: 0;
  top: 0;
  vertical-align: top;
  background-color: #eceff1;
  flex-direction: column;
  letter-spacing: 1.2px;
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: 3.4rem;
  z-index: 95;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
`;

const Button = styled.button`
  background-color: #eceff1;
  color: #6e00d6;
  font-size: 12px;
  letter-spacing: 0.2px;
  font-weight: 750;
  height: 88px;
  width: 90px;
  border: solid lightgray 1px;
  outline-style: none;
  vertical-align: top;
  margin-top: 2px;
  margin-left: 35px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :focus {
    opacity: 0.8;
  }
`;
