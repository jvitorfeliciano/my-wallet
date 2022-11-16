import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";

export default function OutflowPage() {
  const [form, setForm] = useState({ price: "", event: "" });
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function getOutFlowInfoForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleOutFlowInfoForm(e) {
    e.preventDefault();
    const body = {
      ...form,
      type: "negative",
    };

    try {
      const response = await api.postExtract(body, token);
      navigate("/extract");
      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  return (
    <Container>
      <Title>
        <h1>Nova Saída</h1>
      </Title>
      <form onSubmit={handleOutFlowInfoForm}>
        <Input
          onChange={getOutFlowInfoForm}
          name="price"
          type="text "
          placeholder="Valor"
          required
        />
        <Input
          name="event"
          onChange={getOutFlowInfoForm}
          type="text "
          placeholder="Descrição"
          required
        />
        <Button type="submit">Salvar saída</Button>
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
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    margin-top: 14px;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
