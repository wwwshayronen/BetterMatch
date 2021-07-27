import React from "react";

const SendDataToServer = (props) => {
  async function postData() {
    const url = "http://localhost:5000/api/goals/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: props.goal[props.goal.length - 1].userID,
        userName: props.goal[props.goal.length - 1].userName,
        achieveDate: props.goal[props.goal.length - 1].achieveDate,
        goalName: props.goal[props.goal.length - 1].goalName,
        goalAmount: props.goal[props.goal.length - 1].goalAmount,
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  postData();

  return (
    <div>
        your goal -{" "}
        {props.goal.map((item, id) => <div key={id}> {item.goalName}</div>)}{" "}
        was Saved!
    </div>
  );
};

export default SendDataToServer;
