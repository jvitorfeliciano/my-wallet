import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";
import api from "../../services/api";

export default function LogInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(false);

  function getLoginFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLoginForm(e) {
    e.preventDefault(e);
    setIsDisabled(true);
    try {
      const response = await api.logIn(form);
      setIsDisabled(false);
      console.log(response);
    } catch (err) {
      setIsDisabled(false);
      alert(err.response.data.message);
    }
  }
  return (
    <Container>
      <Logo />
      <form onSubmit={handleLoginForm}>
        <Input
          onChange={getLoginFormInfo}
          type="email"
          placeholder="E-mail"
          name="email"
          required
        />
        <Input
          onChange={getLoginFormInfo}
          type="password"
          placeholder="Senha"
          name="password"
          required
        />
        <Button isDisabled={isDisabled} type="submit">Entrar</Button>
      </form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #8c16be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px;
  form {
    width: 100%;
  }
`;
