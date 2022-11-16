import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Menu() {
  return (
    <Container >
      <Option to="/inflow">
        <IoIosAddCircleOutline />
        <div>
          Nova<br></br>Entrada
        </div>
      </Option>
      <Option to="/outflow">
        <IoIosRemoveCircleOutline />
        <div>
          Nova<br></br>Saída
        </div>
      </Option>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Option = styled(Link)`
  display: block;
  background: #a328d6;
  border-radius: 5px;
  width: 155px;
  height: 114px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  :visited {
    color: #ffffff;
    text-decoration: none;
  } 
  svg {
    font-size: 28px;
    color: #ffffff;
  }
  div{
    margin-top: 25px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
`;
