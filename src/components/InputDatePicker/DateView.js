import ViewLayout from "./ViewLayout";
import DatePicker from "./DatePicker";
import Button from "./Button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function DateView(props) {
  return (
    <ViewLayout
      header={{
        leftElement: <Button><AiOutlineLeft /></Button>,
        middleElement:<p>year month</p>, 
        rightElement: <Button><AiOutlineRight size={'1rem'}/></Button>
      }}
      bodyElement={
        <DatePicker
          calendar={{ year: 2023, monthIndex: 2 }}
          selectedDate={new Date(2023, 1, 3)}
        />
      }
      foorerElement={<Button>Today</Button>}
    />
  );
}

export default DateView;
