import styled from "styled-components";
const Button = styled.button`
  background: rgba(256, 256, 256, 0.5);
  border: none;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  line-height: 2.5rem;
  color: #005ab5;
  border-radius: 50%;
  transition: color, background-color 0.1s;

  &:hover {
    background: #005ab5;
    color: #fff;
  }

  ${(props) =>
    props.isToday &&
    `
 border: 0.1rem solid #66B3FF;
 background: #D2E9FF;
 `}

  ${(props) =>
    !props.isCurrentMonth &&
    `
 opacity: 0.5;
 `}

 ${(props) =>
    props.isSelected &&
    `
 background: #005AB5;
 color: #FFF;
 `}
`;

export default Button;
