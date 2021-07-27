import React from "react"

const SharedGoals = ({goal, userEmail}) => {
        async function postSharedGoal() {
          console.log("data going to send to server")
          console.log("goal:", goal)
          const url = "http://localhost:5000/api/shared-goals/";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: goal[0]._id,
              userID: userEmail,
              userName: goal[0].userName,
              achieveDate: goal[0].achieveDate,
              goalName: goal[0].goalName,
              goalAmount: goal[0].goalAmount,
            }),
          });
          // console.log("res:", response.json());
          return response.json();
        }

        postSharedGoal();

        return (
            <div>
                goal shared!
            </div>
        )
}

export default SharedGoals;