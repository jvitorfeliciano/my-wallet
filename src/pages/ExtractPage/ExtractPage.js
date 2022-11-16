import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Menu from "./Menu";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";

export default function ExtractPage() {
  const  {token}  = useContext(AuthContext);
  const [exctract, setExtract] = useState(null);
 
   useEffect(() => {
     api.getExtract(token).then((res)=>{
      console.log(res);
      setExtract(res.data);
     }).catch((err)=>{
      console.log(err)
     })
     
  }, []);
  
  return (
   
    <Container>
      <Header>
        <UserName>Olá, Fulano</UserName>
        <RiLogoutBoxRLine />
      </Header>
      <ExtractInformation>
        <span>

          Não há registro de<br></br> entrada ou saída!
        </span>
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
  background: #ffffff;
  border-radius: 5px;
  margin-top: 22px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
