import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Extract({ date, type, price, event }) {
  const [color, setColor] = useState();
  useEffect(() => {
    if (type === "negative") {
      setColor("#c70000");
    } else if (type === "positive") {
      setColor("Green");
    }
  }, []);
  return (
    <Container>
      <Left>
        <Day>{date}</Day>
        <Description>{event}</Description>
      </Left>
      <Price color={color}>{price}</Price>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 22px 12px 0 12px;
`;

const Day = styled.div`
  color: #c6c6c6;
  margin-right: 12px;
`;

const Description = styled.div`
  color: #000000;
  height: auto;
  word-break: break-word;
`;

const Price = styled.div`
  color:${props=>props.color};
  margin-left: 10px;
`;
const Left = styled.div`
  display: flex;
`;
