import React, { Fragment } from "react";
import styled from "styled-components";

import AddTransactions from "./components/AddTransactions";

const TransactionsUI = () => {
  return (
    <Fragment>
      {/* <IncomeContainer>
        <h1>Incomes <span role="img" aria-label="money-bag">💰</span></h1>
      <AddTransactions />
      </IncomeContainer> */}
      <Title>Coming soon...</Title>
    </Fragment>
  );
};

export default TransactionsUI;

const IncomeContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: Poppins, sans-serif;
  color: #6e00d6;
  background-color: #eceff1;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 2rem;
  margin: 0 auto;
  color: #6e00d6;
  font-size: 3rem;
`
