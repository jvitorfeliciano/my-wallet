import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";
import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function LogInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(false);
  const { setToken } = useContext(AuthContext);
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  function getLoginFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleLoginForm(e) {
    e.preventDefault(e);
    setIsDisabled(true);

    api
      .logIn(form)
      .then((res) => {
        setIsDisabled(false);
        setToken(res.data.token);
        setUserName(res.data.name);
        navigate("/extract");
        console.log(res);
      })
      .catch((err) => {
        setIsDisabled(false);
        alert(err.response.data.message);
      });
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
        <Button isDisabled={isDisabled} type="submit">
          Entrar
        </Button>
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
