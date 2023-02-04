import DateView from "./DateView";
import styled from "styled-components";

const Picker = styled.div`
width: 29rem;
height: 35rem;
padding: 1rem;
border: 0.1rem solid rgba(0, 0, 0, 0.2);
`

function InputDatePicker(props) {
  return (
    <Picker>
      <DateView />
    </Picker>
  );
}

export default InputDatePicker;
