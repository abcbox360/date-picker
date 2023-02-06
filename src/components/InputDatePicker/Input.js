import { useContext } from "react";
import DateContext from "./DateContext";
import { InputButton } from "../Buttons/Button";

function Input(props) {
  const { value } = useContext(DateContext);
  return <InputButton value={value.textInput}></InputButton>;
}

export default Input;
