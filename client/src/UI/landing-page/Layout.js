import React from "react";
import styled from "styled-components";
import { Breadcrumb, Layout, Menu } from "antd";
import BTRmatchLogo from "./BTRmatchLogo.png";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Button from "../Button.tsx";
const { Header, Content, Footer } = Layout;

const IMG_URI =
  "https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

const AppLayout = ({ children }) => (
  <Layout>
    <Header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LogoText>BetterMatch</LogoText>
        <ul></ul>
      </div>
    </Header>
    <Content style={{}}>
      <SecondHeader backgroundImageUri={IMG_URI}>
        <Wrapper>
          <Title
            style={{
              fontSize: "3em",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Your players are waiting for you
          </Title>
          <Paragraph
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Introducing your revolutionary soccer platform, powered by
            cutting-edge AI technology, designed to seamlessly match players
            with their ideal teams.
          </Paragraph>
          <Button>GET STARTED</Button>
        </Wrapper>
      </SecondHeader>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

const LogoText = styled.h5`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-style: italic;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #001529;
  height: auto;
  min-height: 500px;
  background-image: url(${(props) => props.backgroundImageUri});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  text-align: left;
`;

const SubHeaderTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  color: white;
`;

export default AppLayout;
