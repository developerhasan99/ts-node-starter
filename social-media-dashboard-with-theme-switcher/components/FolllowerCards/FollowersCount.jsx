import styled from "@emotion/styled";
import { useContext } from "react";
//Import Context
import Context from "../../context/darkContext";
//Import Utils
import colors from "../../utils/colors";

const H3 = styled.h3`
  font-size: 60px;
  margin: 1rem 0 0;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? "#fff" : colors.texDark)};
`;

function FollowersCount({ followersCount }) {
  const { isDark } = useContext(Context);
  return <H3 isDark={isDark}>{followersCount}</H3>;
}

export default FollowersCount;
