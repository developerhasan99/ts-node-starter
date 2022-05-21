import Header from "../components/Header/Header";
import FollowerCards from "../components/FolllowerCards/FollowerCards";
import SeoHead from "../components/seo-head";
import { useState } from "react";
import styled from "@emotion/styled";
import Context from "../context/darkContext";

const Root = styled.div`
  transition: 0.3s ease-in-out;
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark ? `hsl(230, 17%, 14%)` : `hsl(0, 0%, 100%)`};
`;

export default function Home() {
  const [isDark, setDark] = useState(false);

  const handleClick = () => {
    setDark(!isDark);
    console.log("Iam clicked");
  };

  return (
    <Context.Provider value={{ isDark, handleClick }}>
      <Root isDark={isDark}>
        <SeoHead />
        <Header isDark={isDark} handleClick={handleClick} />
        <FollowerCards />
        Today Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257%
        Profile Views 52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19%
        Total Views 1407 12%
        <div>
          Challenge by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </Root>
    </Context.Provider>
  );
}
