import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import TransactionsList from "./TransactionsList";
import { useAuth0 } from "@auth0/auth0-react";

const AddTransactions = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user, "user");
  const [transaction, setTransaction] = useState([]);
  const [value, setValue] = useState(0);
  const [transactionName, setTransactionName] = useState("");
  const [transactionType, setTransactionType] = useState("income");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();

  const date = today.toLocaleDateString("en-US", options);

  function handleAddForm(e) {
    e.preventDefault();

    if (value > 0) {
      setTransaction([
        ...transaction,
        {
          transactionName: transactionName,
          value: parseInt(value),
          date: date,
          type: transactionType,
          id: user.sub,
          name: user.name
        },
      ]);
    } else {
      alert("You need enter a value greater than 0");
    }
  }

  return (
    <>
      <Form onSubmit={handleAddForm}>
        <p style={{ color: "#6e00d6" }}>
         {user.nickname}, Add incomes & expenses and start explore MONEZ skills!
        </p>
        <label htmlFor="add-income-or-expense-name">name:</label>
        <Input
          type="text"
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
        />
        <label htmlFor="add-income-or-expense-value">value:</label>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="choose witch kind of tansaction you want">
          type of transaction:
        </label>
        <Select
          value={transactionType}
          onChange={(e) => setTransactionType(e.currentTarget.value)}
        >
          <Option key={1} value={"income"}>
            Income
          </Option>
          <Option key={2} value={"expense"}>
            Expense
          </Option>
        </Select>
        <Button
          type="submit"
          disabled={false}
          style={{ backgroundColor: "#6e00d6" }}
        />
      </Form>
      <TransactionsList list={transaction} />
    </>
  );
};

export default AddTransactions;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.1rem;
  background-color: #eceff1;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    height: 100%;
    overflow: hidden;
    border-radius: 0;
    bottom: 0;
  }
`;

const Input = styled.input`
  margin: 0.5rem;
  padding: 0.7rem;
  border-radius: 100px;
  outline: none;
  border: #6e00d6 1px solid;
`;

const Button = styled.input`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  padding: 1rem;
  margin: 10px;
  background-color: #8867a3;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  outline-width: 0;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 30%;
  background-color: #eceff1;
  color: black;
  border-radius: 2px;
  border: none;
  outline: none;
  border-bottom: 2px solid #6e00d6;

  :hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

const Option = styled.option`
  /* padding: 0.5rem;
  margin: 5px;
  width: 20%;
  background-color: black;
  color: white;
  border-radius: 999px;
  outline: none;
  border: 2px solid #8867a3;

  :hover {
    opacity: 0.85;
    cursor: pointer;
  } */
`;
