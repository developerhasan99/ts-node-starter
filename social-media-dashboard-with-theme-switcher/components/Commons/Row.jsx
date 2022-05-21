import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

function Row(props) {
  return <Div>{props.children}</Div>;
}

export default Row;
