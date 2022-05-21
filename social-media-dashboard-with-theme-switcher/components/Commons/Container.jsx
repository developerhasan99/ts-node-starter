import styled from "@emotion/styled";

const Div = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
`;

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
