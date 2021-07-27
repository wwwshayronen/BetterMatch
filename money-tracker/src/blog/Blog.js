import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";
import About from "../mainPage/About";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [image, setImage] = useState([
    {
      caption: null,
      credit: null,
      crop_name: "articleLarge",
      height: 400,
      rank: 0,
      subType: "xlarge",
      subtype: "xlarge",
      type: "image",
      url:
        "images/2020/08/25/world/25alipay/merlin_175143744_b5b200b7-6f8f-4ba2-9a15-10f7e1e467f2-articleLarge.jpg",
      width: 600,
    },
  ]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Financial&api-key=GiKRrt0ex5TPTQODFAA8q1hcAH1eMrbZ`
      );
      const json = await res.json();
      console.log("json data", json);
      setData(...data, json.response.docs[0]);
      setImage(json.response.docs[0].multimedia);
      setLoading(false);
    };

    fetchArticles();
  }, []);
  return loading ? (
    <LoadingOutlined
      style={{ fontSize: "5rem", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%", textAlign: "center" }}
    />
  ) : (
    <>
      <BlogContainer>
        <FirstHeader>Monez-Blog✍️</FirstHeader>
        <a
          href="/profile"
          style={{ color: "violet", marginTop: "1.2rem", fontSize: "2rem" }}
        >
          Return to app <HomeOutlined />
        </a>
        <Article>
          <ArticleTitle>{data.headline && data.headline.main}</ArticleTitle>
          <P>
            <LinkText href={data.web_url}>
              {data.lead_paragraph && data.lead_paragraph}
            </LinkText>
          </P>
          {console.log("dataaaa", image[0].url)}
          <img src={image[0].url} alt="article-image" />
        </Article>
        <Article>
          <ArticleTitle style={{ fontWeight: "900" }}>
            כמה כסף צריך כדי לפרוש?
          </ArticleTitle>
          <P>
            <LinkText
              href="https://www.hasolidit.com/%D7%9B%D7%9E%D7%94-%D7%9B%D7%A1%D7%A3-%D7%A6%D7%A8%D7%99%D7%9A-%D7%9B%D7%93%D7%99-%D7%9C%D7%A4%D7%A8%D7%95%D7%A9"
              style={{ fontWeight: "900" }}
            >
              לקראת סוף גלגולי הקודם, בהיותי קרייריסטית מהשורה, הגעתי להבנה שיש
              לפחות שלוש חובות עקרוניות של “עולם המבוגרים” שאין לי שום עניין
              לעמוד בהן...
            </LinkText>
          </P>
          {/* {console.log("dataaaa", image[0].url)}
        <img src={image[0].url} alt="article-image" /> */}
        </Article>
        <Article>
          <ArticleTitle>
            Here's the secret to surviving an unstable stock market: Long-term
            investments...
          </ArticleTitle>
          <P>
            <LinkText href="https://www.usatoday.com/story/money/investing/2020/10/02/heres-the-secret-to-surviving-an-unstable-stock-market/114161412/">
              The stock market has always been a rollercoaster of ups and downs,
              but 2020 has been a particularly wild ride.
            </LinkText>
          </P>
          {/* {console.log("dataaaa", image[0].url)}
        <img src={image[0].url} alt="article-image" /> */}
        </Article>
        <Article>
          <ArticleTitle>
            Productivity tips from Elon Musk, Jeff Bezos and Steve Jobs
          </ArticleTitle>
          <P>
            <LinkText href="https://www.cnbc.com/2019/09/11/productivity-tips-from-elon-musk-jeff-bezos-steve-jobs-and-more.html">
              Everyone has the same amount of time in a day as people like Elon
              Musk, who is CEO of not just Tesla, but also SpaceX...
            </LinkText>
          </P>
          {/* {console.log("dataaaa", image[0].url)}
        <img src={image[0].url} alt="article-image" /> */}
        </Article>

        {/* customize About component width and margin for current page */}
      </BlogContainer>
      <>
        <About styleObj={{ width: "100%", margin: "0" }} />
      </>
    </>
  );
};

export default Blog;

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: white;
  height: 100%;
`;

const FirstHeader = styled.h1`
  color: palevioletred;
  text-decoration-line: underline;

  letter-spacing: 1.4px;
  font-size: 5rem;
  margin-top: 0;

  :hover {
    color: pink;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: darkblue;
`;
const Article = styled.article`
  margin-top: 80px;
  width: 60%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const P = styled.p`
  letter-spacing: 1.2px;
  margin-top: 12.5px;
  font-size: 1.5rem;
  text-decoration: dashed;
  color: black;
`;

const LinkText = styled.a`
  color: black;

  :hover {
    color: rgb(110, 0, 214);
  }
`;
