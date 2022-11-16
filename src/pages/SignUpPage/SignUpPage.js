import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function getLoginFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLoginForm(e) {
    e.preventDefault();
    const isEqual = form.password === form.confirmPassword;
    if (isEqual) {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
    } else {
      alert("As senhas não correspondem");
    }
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleLoginForm}>
        <Input
          onChange={getLoginFormInfo}
          type="text"
          placeholder="Nome"
          name="name"
          required
        />
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
        <Input
          onChange={getLoginFormInfo}
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          required
        />
        <Button type="submit">Cadastrar</Button>
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
  form {
    width: 100%;
  }
`;
