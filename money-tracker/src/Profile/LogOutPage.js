import React from "react";
import { Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const LogOutPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div style={{ color: "white" }}>MONEZ 💰</div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          It seems that your logged out...<br></br>
          <Link
            onClick={() => loginWithRedirect()}
            style={{ color: "#6e00d6", textDecoration: "none"}}
          >
            Login again
          </Link>{" "}
          or go back to our <a href={global.location.origin}>Home Page</a>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>MONEZ APP - 2020</Footer>
    </Layout>
  );
};

export default LogOutPage;
