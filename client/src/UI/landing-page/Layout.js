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
        height: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LogoText>BetterMatch</LogoText>
        <Menu
          style={{
            //   float: "right",
            // replace float
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            marginLeft: "auto",
            marginBottom: "auto",
            lineHeight: "100px",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
          <Menu.Item key="3">Login</Menu.Item>
        </Menu>
      </div>
    </Header>
    <Content style={{ padding: "0 0", marginTop: "0" }}>
      <div className="site-layout-content">
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
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

const LogoText = styled.h3`
  height: 60px;
  width: 180px;
  margin: 16px;
  font-size: 2em;
  color: white;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-style: italic;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-bottom: auto;
  background-color: #001529;
  height: auto;
  min-height: 500px;
  background-image: url(${(props) => props.backgroundImageUri});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 35%;
  padding: 10px;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  text-align: left;
  // position it to the left
  position: relative;
  right: 20%;
`;

const SubHeaderTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  color: white;
`;

export default AppLayout;
