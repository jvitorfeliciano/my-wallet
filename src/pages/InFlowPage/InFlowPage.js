import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function InflowPage() {
  const [form, setForm] = useState({ price:"", event:"" });
  const {userInfos} = useContext(UserContext);
  const navigate = useNavigate()
  function getInflowFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleInflowForm(e) {
    e.preventDefault();
    const body = {
      ...form,
      type: "positive",
    };
    try {
      const response = await api.postExtract(body, userInfos.token);
      navigate("/extract");
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <Container>
      <Title>
        <h1>Nova entrada</h1>
      </Title>
      <form onSubmit={handleInflowForm}>
        <Input
          onChange={getInflowFormInfo}
          name="price"
          type="number"
          placeholder="Valor"
          required
        />
        <Input
          onChange={getInflowFormInfo}
          name="event"
          type="text "
          placeholder="Descrição"
          required
        />
         <Button type="submit">Salvar entrada</Button>
      </form>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #8c16be;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
  form {
    width: 100%;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 40px;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    margin-top: 14px;
    color: #ffffff;
  }
`;
