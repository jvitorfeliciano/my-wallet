import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Menu() {
  return (
    <Container>
      <Link to="/inflow">
        <Option>
          <IoIosAddCircleOutline />
          <div>
            Nova<br></br>Entrada
          </div>
        </Option>
      </Link>
      <Link to="/outflow">
        <Option>
          <IoIosRemoveCircleOutline />
          <div>
            Nova<br></br>Saída
          </div>
        </Option>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Option = styled.div`
  display: block;
  background: #a328d6;
  border-radius: 5px;
  width: 155px;
  height: 114px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  svg {
    font-size: 28px;
    color: #ffffff;
  }
  div {
    margin-top: 25px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
`;
