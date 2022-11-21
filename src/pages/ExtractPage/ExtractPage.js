import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Menu from "./Menu";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import Extract from "./Extract";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

export default function ExtractPage() {
  const { userInfos } = useContext(UserContext);
  const [extract, setExtract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  function computeCashValue(arr) {
    const prices = arr.map((e) => {
      if (e.type === "positive") {
        return Number(e.price);
      } else if (e.type === "negative") {
        return Number(e.price) * -1;
      }
    });
    const totalBalance = prices.reduce(
      (initialValue, element) => initialValue + element,
      0
    );
    setBalance(totalBalance);
  }

  useEffect(() => {
    if (userInfos) {
      api
        .getExtract(userInfos.token)
        .then((res) => {
          console.log(res);
          computeCashValue(res.data);
          setExtract(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [userInfos, update]);

  function logOut() {
    navigate("/");
    localStorage.removeItem("userInfos");
  }
  if (!extract) {
    return (
      <Container>
        <Loading size={50} color={"white"}/>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <UserName>Olá, {userInfos.name}</UserName>
        <RiLogoutBoxRLine onClick={logOut} />
      </Header>
      <ExtractInformation>
        <Extracts formation={extract.length}>
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
                id={e._id}
                setUpdate={setUpdate}
                update={update}
              />
            ))}
        </Extracts>

        {extract.length !== 0 && (
          <BalanceBox>
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
          </BalanceBox>
        )}
      </ExtractInformation>

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
  justify-content: center;
  background-color: #8c16be;
  padding: 21px;
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
  margin-top: 10px;
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
  padding: 15px 12px 15px 12px;
`;

const Extracts = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
  ${(props) => (props.formation === 0 ? "display: flex;" : "")}
  ${(props) => (props.formation === 0 ? "flex-direction: column;" : "")}
  ${(props) => (props.formation === 0 ? "align-items: center;" : "")}
  ${(props) => (props.formation === 0 ? "justify-content: center;" : "")}
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
  background: #ffffff;
  margin-top: 4px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
`;

const Legend = styled.div`
  color: #000000;
`;

const Balance = styled.div`
  color: ${(props) => (props.color > 0 ? "#03AC00" : "#C70000")};
`;
