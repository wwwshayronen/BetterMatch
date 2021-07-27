import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TransactionsList = (props) => {
  const url = "http://localhost:5000/api/transactions/";

  useEffect(() => {
    console.log("transaction:", props);
    props.list.length > 0
      ? postData()
      : console.log("No DATA for the server right now.");
    async function postData() {
      // const dataToSend = JSON.stringify({
      //   transactionAmount: props.list[0].value,
      //   transactionKind: props.list[0].type,
      //   transactionName: props.list[0].transactionName,
      // });
      // console.log("transaction:", dataToSend);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactionAmount: props.list[props.list.length - 1].value,
          transactionType: props.list[props.list.length - 1].type,
          transactionName: props.list[props.list.length - 1].transactionName,
          userName: props.list[props.list.length - 1].name,
          userID: props.list[props.list.length - 1].id,
        }),
      });
      // console.log("res:", response.json());
      return response.json();
    }
  }, [url, props.list]);

  const incomesFilter = props.list.filter((item) => item.type === "income");
  const expensesFilter = props.list.filter((item) => item.type === "expense");
  const incomesSum =
    incomesFilter.reduce((acc, cur) => acc + cur.value, 0) || 0;
  const expensesSum =
    expensesFilter.reduce((acc, cur) => acc + cur.value, 0) || 0;
  const userBalance = incomesSum - expensesSum;

  return (
    <div>
      <h3>Balance: {userBalance}</h3>
      <ShowIncome>
        <Table>
          {props.list
            ? props.list.map((transaction, id) => (
                <>
                  <tr>
                    <Td key={id} id={id}>
                      {transaction.transactionName}
                    </Td>
                    <Td>{transaction.value}$</Td>
                    <Td>{transaction.type}</Td>
                    <Td>{transaction.date}</Td>
                  </tr>
                </>
              ))
            : null}
        </Table>
      </ShowIncome>
    </div>
  );
};

export default TransactionsList;

const ShowIncome = styled.div`
  display: block;
  opacity: 0.9;
  padding: 5%;
  border-radius: 50px;
`;
const Table = styled.table`
  display: flex;
  flex-direction: column;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const Td = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
  width: 150px;
  color: black;
  text-align: center;
`;
