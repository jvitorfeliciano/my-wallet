import styled from "styled-components";

const Button = styled.button`
  height: 46px;
  width: 100%;
  background: #a328d6;
  border:none;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  border:none;
  padding:11px;
  opacity:${props => props.isDisabled ? "0.6":"1" };
  pointer-events: ${props => props.isDisabled ? "none":"auto" };
`;

export default Button;