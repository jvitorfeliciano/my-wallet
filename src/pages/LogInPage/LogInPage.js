import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function LogInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUserInfos } = useContext(UserContext);
  const navigate = useNavigate();

   const storedData = JSON.parse(localStorage.getItem("userInfos"));

  useEffect(() => {
    if (storedData) {
      navigate("/extract");
    }
  }, []); 
  
  function saveLocalStorage(obj) {
    localStorage.setItem("userInfos", JSON.stringify(obj));
  }

  function getLoginFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLoginForm(e) {
    e.preventDefault(e);
    setIsLoading(true);
    try {
      const res = await api.logIn(form);
      setIsLoading(false);
      setUserInfos(res.data);
      saveLocalStorage(res.data);
      navigate("/extract");
      console.log(res);
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  }
  if(storedData) {
    return;
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
        <Button isLoading={isLoading} type="submit">
          {isLoading ? <Loading size={30} color={"white"} /> : "Entrar"}
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
