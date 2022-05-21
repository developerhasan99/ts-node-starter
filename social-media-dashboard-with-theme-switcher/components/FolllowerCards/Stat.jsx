import styled from "@emotion/styled";

const P = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-top: 1.5rem;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isUp ? `hsl(163, 72%, 41%)` : `hsl(356, 69%, 56%)`};
  &::before {
    content: "";
    display: inline-block;
    height: 4px;
    width: 8px;
    background-image: ${(props) =>
      props.isUp ? `url(./images/icon-up.svg)` : `url(./images/icon-down.svg)`};
  }
`;

function Stat({ isUp, todayStat }) {
  return <P isUp={isUp}>Today {todayStat}</P>;
}

export default Stat;
