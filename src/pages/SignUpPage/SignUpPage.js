import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";
import api from "../../services/api";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  function getSignUpFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUpForm(e) {
    e.preventDefault();
    const isEqual = form.password === form.confirmPassword;
    if (isEqual) {
      setIsDisabled(true);
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      api
        .signUp(body)
        .then((res) => {
          setIsDisabled(false);
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
          setIsDisabled(false);
        });
    } else {
      alert("As senhas não correspondem");
    }
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSignUpForm}>
        <Input
          onChange={getSignUpFormInfo}
          type="text"
          placeholder="Nome"
          name="name"
          required
        />
        <Input
          onChange={getSignUpFormInfo}
          type="email"
          placeholder="E-mail"
          name="email"
          required
        />
        <Input
          onChange={getSignUpFormInfo}
          type="password"
          placeholder="Senha"
          name="password"
          required
        />
        <Input
          onChange={getSignUpFormInfo}
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          required
        />
        <Button isDisabled={isDisabled} type="submit">
          Cadastrar
        </Button>
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
