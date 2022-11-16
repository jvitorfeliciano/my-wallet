import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import StyledLink from "../../components/StyledLink/StyledLink";

export default function SignUpPage() {
    const [form, setForm]=useState({name:"", email:"",password:"", confirmPassword:""});
  
    function handleForm(e){
        setForm({...form, [e.target.name]:e.target.value})
  
    }

  return (
    <Container>
      <Logo />
      <form>
        <Input onChange={handleForm} type="text" placeholder="Nome" name="name" required />
        <Input onChange={handleForm}type="email" placeholder="E-mail" name="email" required  />
        <Input onChange={handleForm}type="password" placeholder="Senha" name="password"required />
        <Input onChange={handleForm} type="password" placeholder="Confirme a senha" name="confirmPassword" required />
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
  form {
    width: 100%;
  }
`;
