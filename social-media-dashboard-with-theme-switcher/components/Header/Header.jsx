import styled from "@emotion/styled";
import Container from "../Commons/Container";
import DarkModeBtn from "./DarkModeBtn";

const Wrapper = styled.div`
  background-color: #f8f9fe;
  padding: 35px 0 150px;
  transition: 0.3s ease-in-out;
  ${(props) =>
    props.isDark &&
    `
    background-color: hsl(232, 19%, 15%);
  `}
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1`
  margin: 0;
  color: hsl(230, 17%, 14%);
  ${(props) =>
    props.isDark &&
    `
    color: hsl(0, 0%, 100%)
  `}
`;

const SubHeading = styled.h2`
  margin: 5px 0;
  font-size: 15px;
  color: hsl(228, 12%, 44%);
  ${(props) =>
    props.isDark &&
    `
    color: hsl(0, 0%, 100%)
  `}
`;

function Header({ isDark, handleClick }) {
  return (
    <Wrapper isDark={isDark}>
      <Container>
        <Flex>
          <div>
            <Heading isDark={isDark}>Social Media Dashboard</Heading>
            <SubHeading isDark={isDark}>Total Followers: 23,004</SubHeading>
          </div>
          <DarkModeBtn isDark={isDark} handleClick={handleClick} />
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Header;
