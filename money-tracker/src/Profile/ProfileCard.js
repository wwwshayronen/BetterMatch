import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import sleepingPig from "../images/sleeping_2x.jpg";

const ProfileCard = () => {
  const [userPicture, setUserPicture] = useState(sleepingPig);
  const { user } = useAuth0();
  console.log("user", user);

  const defaultProfileImage = () => {
    user.sub.includes("google") && setUserPicture(user.picture);
  };

  useEffect(() => {
    console.log("effect ran");
    defaultProfileImage();
  }, [user]);

  // Set default name for testing application without login
  return (
    <Nav>
      <Card>
        <Image src={`${userPicture}`} />
        <h1 style={{ color: "grey", marginTop: "20px", fontSize: "1.1rem" }}>Hello, {user.name}</h1>
        <div
          href="#"
          style={{
            color: "grey",
            display: "block",
            marginTop: "20px",
            marginBottom: "auto",
            marginLeft: "20px",
            textAlign: "left",
          }}
        >
          Edit Profile⚙️
        </div>
      </Card>
      <UnorderList>{/* <Pig /> */}</UnorderList>
    </Nav>
  );
};

export default ProfileCard;

const Nav = styled.nav`
  /* margin-left: 3rem; */
  width: 225px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: 25px;
  position: relative;
  bottom: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  background-color: whitesmoke;
  height: 200px;
  border-radius: 15px;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  padding: 0;
  box-shadow: 0 8.1px 1.4px rgba(0, 0, 0, 0.007),
    0 13.3px 3.1px rgba(0, 0, 0, 0.015), 0 16.5px 5.3px rgba(0, 0, 0, 0.023),
    0 18.8px 8.2px rgba(0, 0, 0, 0.033), 0 20.7px 12.2px rgba(0, 0, 0, 0.051),
    0 23.1px 17.9px rgba(0, 0, 0, 0.061), 0 27px 26.8px rgba(0, 0, 0, 0.065),
    0 34.3px 42.7px rgba(0, 0, 0, 0.067), 0 50px 80px rgba(0, 0, 0, 0.07);
`;

const UnorderList = styled.ul`
  margin: 0px 10px 0px 0px;
  padding: 5px 5px 5px 5px;
  width: 200px;
`;
