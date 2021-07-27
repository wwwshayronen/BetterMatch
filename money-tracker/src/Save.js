import React, { useState, useEffect } from "react";
import HowToSave from "./HowToSave";
import styled, { keyframes } from "styled-components";

const Save = () => {
  const [values, setValues] = useState([]);
  const [amount, setAmount] = useState();
  const [save, setSave] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:8080/users")
        .then((res) => res.json())
        .then((res) => setAmount(res[0].budget));
      console.log(amount);
    }
    fetchData();
  }, []);

  function handelFormSubmit(e) {
    e.preventDefault();
    amount >= save
      ? setValues({
          ...values,
          id: values.length + 1,
          amount: amount,
          save: save,
        })
      : setValues([]);
  }

  function handleInputChange(mySetFunction, e) {
    const numericRegex = /^([0-9]{1,100})+$/;
    const eventValue = parseInt(e.target.value);
    numericRegex.test(eventValue) ? mySetFunction(eventValue) : mySetFunction();
  }

  return (
    <>
      <FormStyle onSubmit={handelFormSubmit}>
        <h1 style={{ color: "#6e00d6" }}>
          Be SMART about your expenses! <span role="img">🤑</span>
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            letterSpacing: "1.2px",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Enter your budget and the amount of money you want to save
          until the end of the month.
        </p>
        <label htmlFor="current-amount">Budget:</label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => handleInputChange(setAmount, e)}
          placeholder="your amount"
        ></Input>
        <label htmlFor="current-amount">The amount you want to save:</label>
        <Input
          id="save"
          type="number"
          value={save}
          onChange={(e) => handleInputChange(setSave, e)}
          placeholder="the amount you want to save"
        ></Input>
        <Button type="submit" className="input-submit" value="Calculate Now!" />
        {values.amount > 0 && values.save > 0 ? (
          <HowToSave details={values} />
        ) : null}
      </FormStyle>
    </>
  );
};

export default Save;

// const AnotherAnimation = keyframes`
//   from {
//     left: 100px;
//   }
//   to {
//     top: 20px;
//   }
// `

const Moving = keyframes`
  50% { height: -200px; width: 100%; opacity: 0.5; },
 0%, 100% { height: 10%; width: 50%; opacity: 0.5; },
`;

const FormStyle = styled.form`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 20px;
  margin: auto;
  font-family: Poppins, sans-serif;
  background-color: #eceff1;
  /* border-bottom-left-radius: 27%; 
  border-bottom-right-radius: 27%;  */
  /* margin: 1rem; */
  padding: 2rem;
  animation: ${Moving};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;
const Input = styled.input`
  border: #6e00d6 1px solid;
  margin: 0.8rem;
  padding: 0.6rem;
  border-radius: 200px;
  outline-width: 0;
  color: #6e00d6;
`;
const Button = styled.input`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  padding: 1rem;
  margin: 10px;
  background-color: #8867a3;
  border-radius: 999px;
  border: 1px white solid;
  background-color: #6e00d6;
  cursor: pointer;
  outline-width: 0;
  color: white;

  &:hover {
    border: 2px black solid;
  }
`;
