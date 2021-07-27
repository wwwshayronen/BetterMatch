import React from "react";
import styled from "styled-components";

import FinanceList from "./FinanceList.json";
import {
  Title,
  SubTitle,
  Header,
  Container,
} from "../Saving-goals/SavingGoals";
import PersonalFinance from "../../assets/PersonalFinance";
import RandomFinanceProfessions from "./RandomFinanceProfessions";

// arr of professions title's
const professionsTitle = Object.keys(FinanceList[0]);

const MarketPlace = () => {
    console.log(`from mp comp. financeList: ${FinanceList[0].Business.adviser_name}`)
  return (
    <Container>
      <Header>
        <div style={{ display: "block" }}>
          <Title>Marketplace</Title>
          <SubTitle>Find advisor, contact - improve your finance</SubTitle>
        </div>
        <PersonalFinance />
      </Header>
      <FinanceFields>
        {professionsTitle.map((field) => (
          <SortFieldButton>
            <a style={{ alignSelf: "center", color: "#eceff1" }}>{field}</a>
          </SortFieldButton>
        ))}
      </FinanceFields>
      <RandomFinanceProfessions professionsList={FinanceList} professionsTitle={professionsTitle} />
    </Container>
  );
};

export default MarketPlace;

const FinanceFields = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
const SortFieldButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 1rem;
  width: 170px;
  height: 55px;
  border-radius: 100px;
  border: none;
  background-color: #2f2e41;
  font-weight: 600;
  font-size: 1.2rem;

  :hover {
    border-bottom: whitesmoke solid 5px;
    border-top: whitesmoke solid 5px;
    background-color: #575a89;
  }
`;
