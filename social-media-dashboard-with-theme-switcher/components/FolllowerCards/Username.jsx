import { useContext } from "react";
import styled from "@emotion/styled";
//Import Context
import Context from "../../context/darkContext";
//Import Utils
import colors from "../../utils/colors";
import icons from "../../utils/icons";

const H3 = styled.h3`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.isDark ? colors.dsaturatedBlue : colors.textGray)};
  &::before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    background-image: url(${(props) => icons[props.name]});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

function Username({ name, username }) {
  const { isDark } = useContext(Context);
  return (
    <H3 name={name} isDark={isDark}>
      @{username}
    </H3>
  );
}

export default Username;
