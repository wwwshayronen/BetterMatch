import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";

import UserNav from "./UserNav";
import About from "../mainPage/About";
import ProfileCard from "./ProfileCard";
import RecentActivities from "./RecentActivities";
import Save from "../Save";
import TransactionsUI from "../income/TransactionsUI";
import Expenses from "../expenses/Expenses";
import Info from "../Info";
import ProfileArticles from "../blog/ProfileArticles";
import MobileNav from "../mainPage/MobileNav";
import LogOutPage from "./LogOutPage";
import SavingGoals from "./Saving-goals/SavingGoals";
import MarketPlace from "./Finance-advisers/MarketPlace";

export const ProfileNav = () => {
  const { logout } = useAuth0();
  return (
    <Navigator>
      <TitleContainer>
        <LogoHeader>MONEZ 💰</LogoHeader>
      </TitleContainer>
      <UnorderedList>
        <ListItem>
          <Link
            to="blog"
            style={{
              color: "white",
              border: "1px white solid",
              padding: "1rem",
            }}
          >
            Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
            Contact us
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log out
          </Link>
        </ListItem>
      </UnorderedList>
      <ProfileCard />
    </Navigator>
  );
};

const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [component, setComponent] = useState(<RecentActivities />);
  let { routeName } = useParams();
  let { path } = useRouteMatch();

  return isLoading ? (
    <LoadingOutlined
      style={{
        fontSize: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
        textAlign: "center",
      }}
    />
  ) : isAuthenticated ? (
    <BackGround>
      <UserNav  />
      <PurpleBox>
        <MobileNav  />
        <ProfileNav></ProfileNav>
      </PurpleBox >
      <ProfileContent>
        <Switch>
          <Route exact path="/profile" component={RecentActivities}>
            <RecentActivities />
          </Route>
          <Route path={`${path}/budget`} component={SavingGoals}>
            <ComponentContainer>
              <Save />
            </ComponentContainer>
          </Route>
          <Route path={`${path}/goals`} component={SavingGoals}>
            <ComponentContainer>
              <SavingGoals />
            </ComponentContainer>
          </Route>
          <Route path={`${path}/marketplace`} component={MarketPlace}>
            <ComponentContainer>
              <MarketPlace />
            </ComponentContainer>
          </Route>
          <Route path={`${path}/transactions`} component={TransactionsUI}>
            <ComponentContainer>
              <TransactionsUI />
            </ComponentContainer>
          </Route>
        </Switch>
        <ProfileArticles />
        <About />
      </ProfileContent>
    </BackGround>
  ) : (
    <>
      <LogOutPage />
    </>
  );
};

export default Profile;

const BackGround = styled.div`
  position: static;
  background-color: white;
  height: 100vh;
  padding: 0;
  z-index: 1;
  overflow: auto;
`;

const PurpleBox = styled.div`
  position: relative;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6e00d6;
  z-index: 2;
  opacity: 0.9;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  width: 97.8vw;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
    left: 0;
    bottom: 0;
  }
`;

const ProfileContent = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  bottom: 8px;
  background-color: #eceff1;
  min-height: 100%;
  z-index: 4;
  border-radius: 20px;
  width: 92vw;
  margin-left: 5rem;
  overflow: auto;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    position: static;
    border-radius: 0;
    bottom: 0;
    margin: 0;
  }
`;

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Navigator = styled.nav`
  background-color: #6e00d6;
  color: #e6f4f1;
  height: 33vw;
  margin: 0 auto;
  width: 70vw;

  @media (max-width: 768px) {
  }
`;

const TitleContainer = styled.div`
  position: relative;
  bottom: -64px;
  margin: 1rem;
  color: #ebfdfe;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 0.7px;
`;

const UnorderedList = styled.ul`
  display: flex;
  position: relative;
  bottom: 10px;
  justify-content: flex-end;
  letter-spacing: 1.2px;
  font-size: 1.3rem;
  font-weight: 700;
  border: 1px white solid;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;

const ListItem = styled.li`
  text-align: left;
  margin: 1rem;
  list-style: none;
  text-decoration: none;
  color: white;
  cursor: pointer;

  :nth-child(1):hover {
    opacity: 0.9;
    margin: 1rem;
    text-decoration: underline;
  }

  :nth-child(2):hover {
    opacity: 0.9;
  }

  :nth-child(3):hover {
    color: whitesmoke;
    opacity: 0.85;
  }
`;

export const LogoHeader = styled.h2`
  position: relative;
  bottom: 25px;
  font-size: 1.3rem;
  color: white;
`;
