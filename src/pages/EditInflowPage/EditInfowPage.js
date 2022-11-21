import { useContext, useState } from "react";
import { useNavigate,  useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function EditInflowPage() {
  const [form, setForm] = useState({ price: "", event: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { userInfos } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

   console.log(location.state)
  function getEditInflowFormInfo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleEditInflowForm(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      ...form,
      type: "positive",
    };
    console.log(body);
    try {
      const response = await api.editExtract(userInfos.token,body,location.state);
      setIsLoading(false);
      navigate("/extract");
      console.log("testandoo");
      console.log(response);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data);
    }
  }

  return (
    <Container>
      <Title>
        <h1>Editar entrada</h1>
      </Title>
      <form onSubmit={handleEditInflowForm}>
        <Input
          onChange={getEditInflowFormInfo}
          name="price"
          type="number"
          placeholder="Valor"
          required
          step="0.01"
          min="0"
        />

        <Input
          onChange={getEditInflowFormInfo}
          name="event"
          type="text "
          placeholder="Descrição"
          required
        />

        <Button type="submit" isLoading={isLoading}>
          {isLoading ? <Loading size={30} color={"white"} /> : "Atualizar entrada"}
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
