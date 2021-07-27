import React, { useState } from "react";

import styled from "styled-components";

import pieIcon from "./images/icons/chart-pie-solid.svg";
import CanvasJSReact from "./canvas/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BudgetList = (props) => {
  const budget = props.budget;
  console.log(`in budget component: ${props.budget}`);
  const [values, setValues] = useState([]);
  const [newValue, setNewValue] = useState("");
  const [newNumValue, setNumNewValue] = useState(0);
  const [sum, setSum] = useState(budget);
  const [disabled, setDisabled] = useState(false);

  const pieData = values.map((val) => {
    return {
      label: val.title,
      y: val.value,
    };
  });

  const options = {
    animationEnabled: true,
    //exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2",
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}$",
        dataPoints: pieData,
      },
    ],
  };
  const containerProps = {
    backgroundColor: "grey",
    height: "260px",
    width: "350px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    display: "block",
    clear: "both",
  };

  function addExpenseSubmit(e) {
    e.preventDefault();

    setSum(sum - newNumValue);

    sum - newNumValue <= -1 || newNumValue > props.budget
      ? (function () {
          if (sum == 0) {
            alert("Your expenses are over");
          } else alert(`try value less than ${sum}`);

          setSum(sum);
        })()
      : setValues([...values, { title: newValue, value: newNumValue }]);
  }

  return (
    <BudgetContainer>
      <Card>
        <h3>💲 Your total budget for the rest of the month is: {sum}</h3>
        <h4>Choose on what you want to spent:</h4>
      </Card>
      <PieContainer>
        <Card>
          <form
            onSubmit={addExpenseSubmit}
            style={{ display: "block", color: "black" }}
          >
            <label htmlFor="expense-name">expense-name:</label>
            <Input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <label htmlFor="expense-value"></label>
            <Input
              type="number"
              value={newNumValue}
              onChange={(e) => setNumNewValue(e.target.value)}
            />
            <Button disabled={disabled} type="submit" value="Add" />
          </form>
        </Card>
        {values.length > 0 ? (
          <Card>
            {values.map((value, id) => (
              <>
                <div key={id}>
                  {value.title}: {value.value}$
                </div>
              </>
            ))}
          </Card>
        ) : null}
        {values.length > 0 ? (
          <CanvasJSChart containerProps={containerProps} options={options} />
        ) : (
          <>
            <h2>Add expenses and see them on a Pie Chart</h2>
            <img
              src={pieIcon}
              width="100px"
              height="100px"
              style={{ margin: "10px" }}
            />
          </>
        )}
      </PieContainer>
    </BudgetContainer>
  );
};

export default BudgetList;

const BudgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  color: black;
  width: 100%;
  height: 100%;
  margin-right: 3rem;
  /* border-radius: 30%; */
`;

const PieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
`;

const Card = styled.div`
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  text-align: left;
  align-self: center;
  padding: 2%;
  border: 1px black solid;
  width: 100%;
  border-radius: 20px;
  background-color: #6e00d6;
  height: 250px;
  margin: 1rem;
`;

const Input = styled.input`
  border: #0e727a 4px solid;
  margin: 0.3rem;
  padding: 0.2rem;
  border-radius: 200px;
  outline-width: 0;
  color: black;
`;

const Button = styled.input`
  color: black;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  align-self: center;
  text-align: center;
  letter-spacing: 1.1px;
  width: 12rem;
  border-radius: 999px;
  border: 1.5px whitesmoke solid;
  cursor: pointer;

  &:hover {
    color: white;
    border: 3px black solid;
  }
`;

// const BreakRow = styled.div`
//   flex-basis: 50%;
//   height: 0;
// `;
