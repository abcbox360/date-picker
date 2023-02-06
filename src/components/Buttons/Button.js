import styled from "styled-components";
import { selectedStyle } from "../InputDatePicker/minins";
import {defaultTheme} from "../../utils/themes"
const Theme = defaultTheme;

const button_base = styled.button`
  background: rgba(256, 256, 256, 0.5);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color, background-color 0.1s;
  color: ${Theme.color_green};

  &:hover {
    background: ${Theme.color_green};
    color: ${Theme.color_white};
  }
`;
const Button = styled(button_base)`
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 50%;
  font-size: 18px;

  ${(props) =>
    props.isToday &&
    `
 border: 0.1rem solid ${Theme.color_green};
 background: ${Theme.color_green2};
 `}

  ${(props) =>
    !props.isCurrentMonth &&
    `
 opacity: 0.5;
 `}


 ${selectedStyle}
`;

const Button2 = styled(button_base)`
  height: 100%;
  font-size: 18px;
  border-radius: 10px;
 ${selectedStyle}
`;

const Button3 = styled(button_base)`
  height: 100%;
  width: 25%;
  font-size: 18px;
  border-radius: 10px;
`;

const Button4 = styled(button_base)`
  height: 100%;
  width: 40%;
  font-size: 18px;
  border-radius: 10px;
`;

const InputButton = styled.input`
width: 100%;
    text-align: center;
    border-radius: 10px;
    border: 1px solid 
`

export { Button, Button2, Button3, Button4, InputButton };
