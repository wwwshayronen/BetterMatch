import React from "react";
import styled from "styled-components";

const ProfileArticles = () => {
  return (
    <ListContainer>
      <h2 style={{ fontSize: "1.6rem", marginLeft: "0rem", fontWeight: "700" }}>
        here some finance articles that may help you:
      </h2>

      <Item style={{ textAlign: "right" }}>
        <Title>כמה כסף צריך כדי לפרוש?</Title>
        לקראת סוף גלגולי הקודם, בהיותי קרייריסטית מהשורה, הגעתי להבנה שיש לפחות
        שלוש חובות עקרוניות של “עולם המבוגרים” שאין לי שום עניין לעמוד בהן...
        <a href="https://www.hasolidit.com/%D7%9B%D7%9E%D7%94-%D7%9B%D7%A1%D7%A3-%D7%A6%D7%A8%D7%99%D7%9A-%D7%9B%D7%93%D7%99-%D7%9C%D7%A4%D7%A8%D7%95%D7%A9">
          Read more...
        </a>
      </Item>
      <Item>
        <Title>
          Here's the secret to surviving an unstable stock market: Long-term
          investments...
        </Title>
        <Par>
          The stock market has always been a rollercoaster of ups and downs, but
          2020 has been a particularly wild ride.
        </Par>
        <a href="https://www.usatoday.com/story/money/investing/2020/10/02/heres-the-secret-to-surviving-an-unstable-stock-market/114161412/">
          Read more...
        </a>
      </Item>
      <Item>
        <Title>
          Productivity tips from Elon Musk, Jeff Bezos and Steve Jobs
        </Title>
        <Par>
          Everyone has the same amount of time in a day as people like Elon
          Musk, who is CEO of not just Tesla, but also SpaceX...
        </Par>
        <a href="https://www.cnbc.com/2019/09/11/productivity-tips-from-elon-musk-jeff-bezos-steve-jobs-and-more.html">Read more...</a>
      </Item>
    </ListContainer>
  );
};

export default ProfileArticles;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 2rem;
  margin-top: 12rem;
  overflow: hidden;
  background-color: #eceff1;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    flex-direction: column;
  }
`;

const Item = styled.li`
  width: 27vw;
  height: 300px;
  box-shadow: 3px 1px 1px 1px rgba(110, 0, 214, 0.16);
  -webkit-box-shadow: 3px 1px 1px 1px rgba(110, 0, 214, 0.16);
  -moz-box-shadow: 3px 1px 1px 1px rgba(110, 0, 214, 0.16);
  padding: 1rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const Par = styled.p`
  width: 70%;
`;

const Title = styled.h3`
  color: #6e00d6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  opacity: 0.8;

  :hover {
  opacity: 1;  }
`;
