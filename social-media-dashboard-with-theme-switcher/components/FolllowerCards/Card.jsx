import styled from "@emotion/styled";
import { useContext } from "react";
//Import Context
import Context from "../../context/darkContext";
//Import Utils
import colors from "../../utils/colors";
//Import Components
import Col from "../Commons/Col";
import Username from "./Username";
import FollowersCount from "./FollowersCount";
import Followers from "./Followers";
import Stat from "./Stat";

const Div = styled.div`
  padding: 15px;
  background: ${(props) => (props.isDark ? colors.cardBgDark : colors.cardBg)};
  text-align: center;
  border-radius: 5px;
  border-top: ${(props) => colors[props.name]} 4px solid;
  position: relative;
  margin-bottom: 1.5rem;
  ${(props) =>
    props.name === "instagram" &&
    `
    padding-top: 20px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-image: ${colors[props.name]};
    }
  `}
`;

function Card({ name, userName, followersCount, todayStat, isUp }) {
  const { isDark } = useContext(Context);

  return (
    <Col>
      <Div name={name} isDark={isDark}>
        <Username name={name} username={userName} />
        <FollowersCount followersCount={followersCount} />
        <Followers name={name} />
        <Stat isUp={isUp} todayStat={todayStat} />
      </Div>
    </Col>
  );
}

export default Card;
