import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function EditOutflowPage() {
  const [form, setForm] = useState({ price: "", event: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { userInfos } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function getEditOutflowFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleEditOutflowForm(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      ...form,
      type: "negative",
    };
    console.log(body);
    try {
      await api.editExtract(userInfos.token, body, location.state);
      setIsLoading(false);
      navigate("/extract");
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <Title>
        <h1>Editar saída</h1>
      </Title>
      <form onSubmit={handleEditOutflowForm}>
        <Input
          onChange={getEditOutflowFormInfo}
          name="price"
          type="number"
          placeholder="Valor"
          required
          step="0.01"
          min="0"
        />

        <Input
          onChange={getEditOutflowFormInfo}
          name="event"
          type="text "
          placeholder="Descrição"
          required
        />

        <Button type="submit" isLoading={isLoading}>
          {isLoading ? (
            <Loading size={30} color={"white"} />
          ) : (
            "Atualizar saída"
          )}
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
