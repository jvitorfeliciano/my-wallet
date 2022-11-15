import styled from "styled-components";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";

export default function LogInPage() {
  return (
    <LoginContainer>
      <Logo />
      <form>
        <Input type="email" placeholder="E-mail"/>
        <Input type="password" placeholder="Senha"/>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #8c16be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px;
`;
