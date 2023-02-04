import { buildWeeks, buildDayNames } from "./generator";
import getDate from "date-fns/getDate";
import { useMemo } from "react";
import Button from "./Button";
import styled from "styled-components";
import dateFnsIsToday from "date-fns/isToday";
import getMonth from "date-fns/getMonth";
import isSameDay from "date-fns/isSameDay";

const CalendarTable = styled.table`
  position: relative;
  width: 100%;
`;

const CalendarHeader = styled.tr`
  &:after {
    content: "";
    width: 100%;
    border-bottom: 0.1rem solid #d0d0d0;
    position: absolute;
    top: 2.3rem;
    left: 0;
  }
  & th {
    padding-bottom: 1rem;
  }
`;

const CalendarRow = styled.tr`
  height: 3.6rem;
  text-align: center;
`;

function DatePicker(props) {
  const { calendar, selectedDate } = props;
  const { year, monthIndex } = calendar;
  const weeks = useMemo(
    () => buildWeeks(year, monthIndex - 1),
    [year, monthIndex]
  );
  const dayNames = useMemo(() => buildDayNames(0), []);
  return (
    <div>
      <CalendarTable>
        <thead>
          <CalendarHeader>
            {dayNames.map((dayName, i) => (
              <th key={i}>{dayName}</th>
            ))}
          </CalendarHeader>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <CalendarRow key={i}>
              {week.map((day, j) => {
                const isToday = dateFnsIsToday(day);
                const isCurrentMonth = getMonth(day) === monthIndex - 1;
                const isSelected = isSameDay(day, selectedDate);
                return (
                  <td key={j}>
                    <Button
                      isToday={isToday}
                      isCurrentMonth={isCurrentMonth}
                      isSelected={isSelected}
                    >
                      {getDate(day)}
                    </Button>
                  </td>
                );
              })}
            </CalendarRow>
          ))}
        </tbody>
      </CalendarTable>
    </div>
  );
}

export default DatePicker;
