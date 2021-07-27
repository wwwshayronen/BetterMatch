import React, { useEffect, useState } from "react";
import { Jutsu } from "react-jutsu";
import { Form, Input, Button, Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { LogoHeader } from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./meeting.css";

const { Header, Content, Footer } = Layout;

const Meeting = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");
  const { user } = useAuth0();

  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <LogoHeader style={{ position: "static" }}>
              Monez 💰 - Meetings
            </LogoHeader>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Meetings</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {call ? (
              <Jutsu
                roomName={room}
                displayName={name}
                password={password}
                onMeetingEnd={() => console.log("Meeting has ended")}
                loadingComponent={<p>loading ...</p>}
                errorComponent={<p>Oops, something went wrong</p>}
              />
            ) : (
              <Form>
                <Input
                  id="room"
                  type="text"
                  placeholder="Room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                />
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  id="password"
                  type="text"
                  placeholder="Password (optional)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} type="submit">
                  Start / Join
                </Button>
              </Form>
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Meeting;
