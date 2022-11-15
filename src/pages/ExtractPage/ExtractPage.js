import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function ExtractPage() {
  return (
    <Container>
      <Header>
        <UserName>Olá, Fulano</UserName>
        <RiLogoutBoxRLine />
      </Header>
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
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #ffffff;
    font-size: 30px;
  }
`;
const UserName = styled.span`
 
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
  
`
