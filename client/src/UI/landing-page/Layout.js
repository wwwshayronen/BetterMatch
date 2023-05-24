import React from "react";
import styled from "styled-components";
import { Breadcrumb, Layout, Menu } from "antd";
import BTRmatchLogo from "./BTRmatchLogo.png";

const { Header, Content, Footer } = Layout;

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
        <Logo className="logo" src={BTRmatchLogo} alt="logo" />
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
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </div>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

const Logo = styled.img`
  height: 60px;
  width: 180px;
  margin: 16px;
`;

export default AppLayout;
