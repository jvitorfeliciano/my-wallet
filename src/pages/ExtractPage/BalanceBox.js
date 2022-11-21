import styled from "styled-components";

export default function BalanceBox({ balance }) {
  return (
    <Container>
      <Legend>SALDO</Legend>
      <Balance color={balance}>
        {balance
          .toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          .replace("-", "")}
      </Balance>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 4px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Legend = styled.div`
  color: #000000;
`;

const Balance = styled.div`
  color: ${(props) => (props.color > 0 ? "#03AC00" : "#C70000")};
`;
