import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthContext from "../../contexts/AuthContext";

export default function OutflowPage() {
  const [form, setForm] = useState({ price: "", evenet: "" });
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function getOutFlowInfoForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Title>
        <h1>Nova Saída</h1>
      </Title>
      <form>
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
        <Button>Salvar saída</Button>
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
const Title = styled.h1`
  width: 100%;
  margin-bottom: 40px;
`;
