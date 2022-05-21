import { useContext } from "react";
import styled from "@emotion/styled";
//Import Context
import Context from "../../context/darkContext";
//Import Utils
import colors from "../../utils/colors";

const P = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 0;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? colors.dsaturatedBlue : colors.textGray)};
`;

function Followers({ name }) {
  const { isDark } = useContext(Context);
  return (
    <P isDark={isDark}>{name == "youtube" ? "Subscriber" : "Followers"}</P>
  );
}

export default Followers;
