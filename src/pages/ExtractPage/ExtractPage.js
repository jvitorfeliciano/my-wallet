import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Menu from "./Menu";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import Extract from "./Extract";

export default function ExtractPage() {
  const { token } = useContext(AuthContext);
  const [extract, setExtract] = useState(null);
  const [balance, setBalance] = useState(0);

  function computeCashValue(arr) {
    const prices = arr.map((e) => {
      if (e.type === "positive") {
        return Number(e.price);
      } else if (e.type === "negative") {
        return Number(e.price) * -1;
      }
    });
    const totalBalance = prices.reduce(
      (element, current) => element + current,
      0
    );
    setBalance(totalBalance);
    console.log(prices, totalBalance);
  }
  useEffect(() => {
    api
      .getExtract(token)
      .then((res) => {
        console.log(res);
        computeCashValue(res.data);
        setExtract(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  if (!extract) {
    return <div>Carregando</div>;
  }
  console.log(balance);
  return (
    <Container>
      <Header>
        <UserName>Olá, Fulano</UserName>
        <RiLogoutBoxRLine />
      </Header>
      <ExtractInformation format={extract.length}>
        {extract.length === 0 && (
          <span>
            Não há registro de<br></br> entrada ou saída!
          </span>
        )}

        {extract.length !== 0 &&
          extract.map((e) => (
            <Extract
              key={e._id}
              date={e.date}
              event={e.event}
              type={e.type}
              price={e.price}
            />
          ))}
      </ExtractInformation>
      {extract.length !== 0 && (
        <BalanceBox>
          <Legend>SALDO</Legend>
          <Balance color={balance}>{balance}</Balance>
        </BalanceBox>
      )}
      <Menu />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c16be;
  padding: 21px;
  position:relative;
`;
const Header = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #ffffff;
    font-size: 30px;
  }
`;
const UserName = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
`;

const ExtractInformation = styled.section`
  width: 100%;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 22px;
  overflow: scroll;
  ${(props) => (props.format === 0 ? "display: flex;" : "")}
  ${(props) => (props.format === 0 ? "flex-direction: column;" : "")}
  ${(props) => (props.format === 0 ? "align-items: center;" : "")}
  ${(props) => (props.format === 0 ? "justify-content: center;" : "")}
  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #868686;
    text-align: center;
  }
`;
const BalanceBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding:12px;
  top: 430px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
`;

const Legend = styled.div`
  color: #000000;
`;

const Balance = styled.div`
  color: ${props=> props.color > 0 ?"#03AC00": "#C70000"};
`;

