import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import About from "../mainPage/About";
import {
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  Avatar,
  Progress,
} from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  EditOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import { Redirect } from "react-router-dom";

import SendDataToTheServer from "../Fetch/SendDataToTheServer";
import LogOutPage from "../Profile/LogOutPage";
import Welcome from "../assets/Welcome";
import { Span } from "../Profile/Saving-goals/SavingGoals";

const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
const { Meta } = Card;

// Add goals component
export const SetGoals = (props) => {
  const { user } = useAuth0();

  const [goal, setGoal] = useState([]);
  const [goalAmount, setGoalAmount] = useState();
  const [goalName, setGoalName] = useState("");
  const [achieveDate, setAchieveDate] = useState("");
  const [show, setShow] = useState(false);

  // Set data state before sending to server
  const handleSubmitGoal = (e) => {
    e.preventDefault();
    setGoal([
      ...goal,
      {
        userName: user.name,
        userID: user.sub,
        goalName: goalName,
        achieveDate: achieveDate._i,
        goalAmount: goalAmount,
      },
    ]);
    setShow(true);
  };

  const handleGoalNameChange = (e) => {
    setGoalName(e.target.value);
  };

  const handleGoalAmountChange = (e) => {
    setGoalAmount(e.target.value);
  };

  const handleAchieveDateChange = (date, dateString) => {
    setAchieveDate(moment(dateString, dateFormat));
  };

  return (
    <>
      <Form onSubmit={handleSubmitGoal}>
        <FormTitle>Add your saving goals:</FormTitle>
        <Label>🎯 Goal name:</Label>
        <Input
          style={{ borderRadius: "100px", width: "30%" }}
          type="text"
          value={goalName}
          onChange={handleGoalNameChange}
          required
        ></Input>
        <Label>🎯 Goal amount:</Label>
        <Input
          style={{ borderRadius: "100px", width: "30%" }}
          type="number"
          value={goalAmount}
          onChange={handleGoalAmountChange}
          required
        ></Input>
        <Label>🎯 When you want to achieve that goal:</Label>
        <DatePicker
          style={{ width: "30%", borderRadius: "100px" }}
          value={achieveDate}
          onChange={handleAchieveDateChange}
          format={dateFormat}
          required
        />
        <Input
          style={{
            borderRadius: "100px",
            width: "30%",
            marginTop: "1rem",
            color: "#8000ff",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
          type="submit"
          value="submit"
        ></Input>
      </Form>

      {/* if show is true - send data to server */}
      {props.showGoalNow &&
        goal.map((goal, id) => (
          <Card
            key={id}
            type={"inner"}
            style={{
              width: "300px",
              cursor: "default",
              margin: "1rem",
            }}
            cover={<img alt="goal-card" src={require("../images/goal.jpg")} />}
            hoverable={true}
            actions={[
              <EditOutlined key="edit" />,
              <ShareAltOutlined />,
              <button style={{border:"none"}} key={id} onClick={() => console.log("deleted not")}>
                <DeleteOutlined />
              </button>,
            ]}
          >
            <Meta
              avatar={<Avatar src={user.picture} />}
              title={goal.goalName}
              description={goal.goalAmount}
              style={{
                marginBottom: "1rem",
                width: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <Progress type="circle" percent={75} />
            </div>
            <h1 style={{ fontSize: "1.1rem" }}>Time to achieve: </h1>
            <Span>{goal.achieveDate}</Span>
          </Card>
        ))}
      {show && <SendDataToTheServer goal={goal} />}
    </>
  );
};

const BankIntegration = (props) => {
  const handleIntegration = () => {};
  return (
    <Form onSubmit={handleIntegration}>
      <FormTitle>Integrate Monez with your transactions 📊</FormTitle>
      <Label>🏦 Choose your bank:</Label>
      <Select defaultValue="Click to choose" style={{ width: "30%" }}>
        <Option style={{ width: "100%" }} value="בנק הפועלים">
          בנק הפועלים
        </Option>
        <Option style={{ width: "100%" }} value="בנק דיסקונט">
          בנק דיסקונט
        </Option>
        <Option style={{ width: "100%" }} value="בנק לאומי">
          בנק לאומי
        </Option>
        <Option style={{ width: "100%" }} value="מזרחי טפחות">
          מזרחי טפחות
        </Option>
        <Option style={{ width: "100%" }} value="בנק אוצר החייל">
          בנק אוצר החייל
        </Option>
      </Select>
      <Label>🔑 Password:</Label>
      <Input
        type="password"
        required
        style={{ borderRadius: "100px", width: "30%" }}
      />
      <Input
        type="submit"
        value="✨ Integrate now"
        style={{
          borderRadius: "100px",
          width: "30%",
          marginTop: "1rem",
          color: "#8000ff",
          cursor: "pointer",
          fontSize: "1.1rem",
        }}
      />
    </Form>
  );
};

const WelcomeToMonez = () => {
  const [redirect, setRedirect] = useState(false);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [form, setForm] = useState(<SetGoals />);
  const [disabledButton, setDisabledButton] = useState(true);
  const [allowRedirect, setAllowRedirect] = useState(false);

  useEffect(() => {
    const fetchGoals = async () => {
      console.log("Fetch goal effect ran");
      try {
        const res = await fetch(`http://localhost:5000/api/goals/${user.sub}`);
        const json = await res.json();
        json.length > 0 && setRedirect(true);
        console.log("response from server:", json);
      } catch (error) {
        console.log("err in server res:", error);
      }
    };
    fetchGoals();
  }, []);

  const handleClickButtonNextStep = () => {
    setAllowRedirect(true);
    setForm(<BankIntegration />);
    setDisabledButton(false);
  };

  const handleClickButtonPreviousStep = () => {
    setDisabledButton(true);
    setAllowRedirect(false);
    setForm(<SetGoals />);
  };

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
    redirect ? (
      <Redirect to="/profile" />
    ) : (
      <Container>
        <Header>
          <Title style={{}}>{user.nickname}, Welcome to monez 👋</Title>
          <Welcome />
          <Par>
            We are happy to see that you decide to take an active action to make
            your economic status better.
            <br />
            Let’s start by adding your saving goals.
          </Par>
        </Header>
        {form}
        <ButtonsContainer>
          {" "}
          <Button
            onClick={handleClickButtonPreviousStep}
            disabled={disabledButton}
            style={{ color: "#1890ff" }}
          >
            <ArrowLeftOutlined />
            Previous step
          </Button>
          <Button
            style={{ color: "whitesmoke", backgroundColor: "#1890ff" }}
            type="primary"
            onClick={handleClickButtonNextStep}
          >
            {allowRedirect ? (
              <a style={{ color: "whitesmoke" }} href="/profile">
                Continue to the app
              </a>
            ) : (
              "Next step"
            )}
            <ArrowRightOutlined />
          </Button>
        </ButtonsContainer>
        <About />
      </Container>
    )
  ) : (
    <>
      <LogOutPage />{" "}
    </>
  );
};

export default WelcomeToMonez;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
`;
const Header = styled.header`
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;
const Par = styled.p`
  font-size: 1.5rem;
  color: #8000ff;
  width: 80%;
  margin-top: 0.8rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 400px;
  border-radius: 50px;
  background-color: #8000ff;
  margin-bottom: 2rem;

  @media (min-device-width: 1200px) and (max-device-width: 1600px) {
    width: 60%;
    height: 350px;
  }
`;

const Label = styled.label`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-orientation: sideways;
  text-align: left;
  margin-bottom: 0.35rem;
  margin-top: 1rem;
  width: 28%;
`;

const FormTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 740;
  margin-bottom: 1rem;
  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
