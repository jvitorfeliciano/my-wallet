import styled from "styled-components";
import logo from "../../assets/MyWallet.png"

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}

const Container = styled.section`
  margin-bottom:24px;
`;
