import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";

export default function SignUpPage() {
  return (
    <Container>
      <Logo />
      <form>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="E-mail" required />
        <Input type="password" placeholder="Senha" required />
        <Input type="password" placeholder="Confirme a senha" required />
        <Button>Cadastrar</Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8c16be;
  padding: 21px;
`;
