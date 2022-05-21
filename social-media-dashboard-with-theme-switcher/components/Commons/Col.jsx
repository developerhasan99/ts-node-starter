import styled from "@emotion/styled";

const Div = styled.div`
  padding: 0 15px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 25%;
    flex: 25%;
  }
`;

function Col(props) {
  return <Div>{props.children}</Div>;
}

export default Col;
