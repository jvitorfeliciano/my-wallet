import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function OutflowPage() {
  const [form, setForm] = useState({ price: "", event: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { userInfos } = useContext(UserContext);
  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("userInfos"));

  useEffect(() => {
    if (!storedData) {
      navigate("/");
    }
  }, []);

  function getOutFlowInfoForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleOutFlowForm(e) {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      ...form,
      type: "negative",
    };

    try {
      await api.postExtract(userInfos.token, body);
      setIsLoading(false);
      navigate("/extract");
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  }
  if (!storedData) {
    return;
  }
  return (
    <Container>
      <Title>
        <h1>Nova Saída</h1>
      </Title>
      <form onSubmit={handleOutFlowForm}>
        <Input
          onChange={getOutFlowInfoForm}
          name="price"
          type="number"
          placeholder="Valor"
          required
          step="0.01"
          min="0"
        />
        <Input
          name="event"
          onChange={getOutFlowInfoForm}
          type="text "
          placeholder="Descrição"
          required
        />
        <Button type="submit" isLoading={isLoading}>
          {isLoading ? <Loading size={30} color={"white"} /> : "Salvar saída"}
        </Button>
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
