import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import goalsMotivation from "../../assets/goalsMotivation.jpg";
import { SetGoals } from "../../First-login/WelcomeToMonez";
import SavingPig from "../../assets/SavingPig";
import { Card, Avatar, Progress, Button, Form, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import SharedGoals from "../../Fetch/SharedGoals";
import AddToCalendar from "react-add-to-calendar";
import moment from "moment";

const { Meta } = Card;
const now = moment();

const SavingGoals = () => {
  const { user } = useAuth0();
  const [savedGoals, setSavedGoals] = useState([]);
  const [sharedGoalsFromServer, setSharedGoalsFromServer] = useState([]);
  const [sharedGoal, setSharedGoal] = useState();
  const [form, setForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/goals/${user.sub}`);
        const json = await res.json();
        console.log(json);
        setSavedGoals(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGoals();
  }, []);

  useEffect(() => {
    const fetchSharedGoals = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/shared-goals/${user.email}`
        );
        const json = await res.json();
        console.log(json);
        setSharedGoalsFromServer(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSharedGoals();
  }, []);

  const handleDeleteGoal = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/goals/delete/${id}`, {
        method: "DELETE",
      });
      console.log(`the goal with id of: ${id}, was deleted!`);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleShareGoal = (id) => {
    setForm(true);
    const sharedGoal = savedGoals.filter((goal) => goal._id === id);
    setSharedGoal(sharedGoal);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const percentage = savedGoals.map((goal) => {
    const startDate = moment(goal.createdAt);
    const endDate = moment(moment(goal.achieveDate))
    const completed = ((moment()  - startDate) / (endDate - startDate)) * 100;
    const percentage_rounded = (Math.round(completed * 100) / 100); 
    return percentage_rounded
  });
  console.log(percentage)

  return (
    <React.Fragment>
      <Container>
        <Header>
          <div style={{ display: "inline-block" }}>
            <Title>
              Saving Goals
              <br />
            </Title>
            <SubTitle>Add new goals, check out your progress.</SubTitle>
          </div>
          <SavingPig />
          {/* <TitleLogo src={ladyPutMoneyInPig} alt="lady-pig"></TitleLogo> */}
        </Header>
        <SetGoals showGoalNow={true} />
        <Goals>
          {savedGoals &&
            savedGoals.map((goal, id) => (
              <Card
                key={goal._id}
                type={"inner"}
                style={{
                  width: "300px",
                  cursor: "default",
                }}
                cover={
                  <img alt="goal-card" src={require("../../images/goal.jpg")} />
                }
                hoverable={true}
                actions={[
                  <AddToCalendar
                    event={{
                      title: goal.goalName,
                      description: `Amount for achieve that goal - ${goal.goalAmount}`,
                      location: "",
                      startTime: goal.achieveDate,
                      endTime: goal.achieveDate,
                    }}
                  />,
                  <button
                    key={goal._id}
                    onClick={() => handleShareGoal(goal._id)}
                    style={{
                      fontSize: "1rem",
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                    }}
                  >
                    <ShareAltOutlined />
                  </button>,
                  <button
                    key={goal._id}
                    onClick={() => handleDeleteGoal(goal._id)}
                    style={{
                      fontSize: "1rem",
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                    }}
                  >
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
                  <Progress type="circle" percent={percentage[id]} />
                </div>
                <h1 style={{ fontSize: "1.1rem" }}>Achieve date: </h1>
                <Span>{goal.achieveDate}</Span>
              </Card>
            ))}
          {form && (
            <Form>
              <Input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="enter your friend mail to share goal"
              ></Input>
              <Input
                onClick={handleSubmitForm}
                type="submit"
                value="submit"
              ></Input>
            </Form>
          )}
          {console.log("show:", show)}
          {show && <SharedGoals goal={sharedGoal} userEmail={userEmail} />}
        </Goals>{" "}
        {sharedGoalsFromServer &&
          sharedGoalsFromServer.map((sharedGoal) => (
            <div>
              {sharedGoal.goalName}, this goal is shared to you by{" "}
              {sharedGoal.userName}
            </div>
          ))}
        <GoalsLogo src={goalsMotivation} alt="target"></GoalsLogo>
      </Container>
    </React.Fragment>
  );
};

export default SavingGoals;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  width: 100vw;
  margin-top: 1rem;

  @media (max-width: 700px) {
    width: 99vw;
    flex-direction: column;
  }
`;
const Goals = styled.ul`
  color: #000;
  font-size: 22px;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  gap: 15px;
  margin-top: 1rem;
  justify-items: center;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0;
  }
`;
// const Goal = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   width: 100%;
//   height: 410px;
//   border-radius: 30px;
//   color: white;
//   margin: 0 auto;
//   margin-top: 1rem;
//   background-color: #8000ff;

//   @media (min-width: 800px) {
//     width: 30vw;
//   }
// `;

const TitleLogo = styled.img`
  width: 176px;
  height: 172px;
  border-radius: 50%;
  margin-left: 1rem;
`;

const GoalsLogo = styled.img`
  border-radius: 20px;
  margin-top: 6rem;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 1.8rem;
`;

export const SubTitle = styled.div`
  color: #a443f0;
  font-size: 1.8rem;
`;

export const Span = styled.span`
  color: #8000ff;
  letter-spacing: 0;
  margin-bottom: 2rem;
`;
