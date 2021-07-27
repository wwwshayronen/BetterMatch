import React, { useState } from "react";
import styled from "styled-components";
import FinanceList from "./FinanceList.json";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  ProfileFilled,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined
} from "@ant-design/icons";
const { Meta } = Card;

const RandomFinanceProfessions = (props) => {
  const [advisersList, setAdvisersList] = useState(FinanceList);
  return (
    <div>
      {props.professionsTitle.map((profession, id) => (
        <Card
          style={{ width: 320, borderRadius: "5px" }}
          actions={[
            <MailOutlined key="mail" />,
            <PhoneOutlined key="phone" />,
            <h2 key="location" style={{ fontWeight: 600, color: "grey" }}>
              {advisersList[0][profession].adviser_location}
            </h2>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={`${advisersList[0][profession].adviser_name} - ${advisersList[0][profession].adviser_profession}`}
            description={advisersList[0][profession].adviser_description}
          />
        </Card>
      ))}
    </div>
  );
};

export default RandomFinanceProfessions;
