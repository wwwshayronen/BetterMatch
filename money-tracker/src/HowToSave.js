import React, { Fragment } from "react";
import styled from "styled-components";
import BudgetList from "./BudgetList";
import Plan from "./assets/Plan";

const months = [32, 29, 32, 31, 32, 31, 32, 32, 31, 32, 31, 32];

const HowToSave = (props) => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth();

  const endOfMonth = months[month] - day;
  const totalAmount = props.details.amount - props.details.save;
  const howMuchForDay = props.details.save / endOfMonth;

  console.log(
    `this is props from how to save comp: total amount${totalAmount} day: ${endOfMonth}`
  );

  return (
    <Fragment>
      <Card>
        <Plan />
        <h3>
          💲 Your current amount is: <Span>{props.details.amount}</Span>
        </h3>
        <p>
          💲 you want to save <Span>{props.details.save}</Span>
        </p>
        <p>
          💲 To do that you simply need to maximum spent:{" "}
          <strong>
            <strong />
            {!howMuchForDay ? 0 : Math.round(howMuchForDay)}{" "}
          </strong>
          for day!!
        </p>
      </Card>
      <>{totalAmount ? <BudgetList budget={totalAmount} /> : false}</>
    </Fragment>
  );
};

export default HowToSave;

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 1fr;
//   position: relative;
//   /* bottom: 700px; */
//   height: 80%;
//   border-radius: 20px;
// `;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: grey;
  text-align: left;
  padding: 2%;
  border: 1px black solid;
  width: 100%;
  border-radius: 20px;
  /* margin-right: 3rem;
  margin-top: 5rem;
  margin-bottom: 10rem; */
`;

const Span = styled.span`
  font-size: 3rem;
  letter-spacing: 1.3px;
`;
