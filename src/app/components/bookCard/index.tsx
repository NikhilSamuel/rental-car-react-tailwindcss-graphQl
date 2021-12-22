import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2 
    pl-2 
    md:pt-2 
    md:pb-2 
    md:pr-9 
    md:pl-9
`}
`;

const ItemContainer = styled.div`
  ${tw`flex relative`}
`;

const Icon = styled.div`
  ${tw`
  text-red-500 
  fill-current
  text-xs
  md:text-base
  mr-1 
  md: mr-3

`}
`;

const SmallIcon = styled.span`
  ${tw`
  text-gray-700 
  fill-current
  text-xs
  md:text-base
  ml-1
`}
`;

const Name = styled.span`
  ${tw`
  text-gray-600 
  text-xs
  md:text-sm
  cursor-pointer
`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300 
    mr-2 
    ml-2 
    md:mr-5 
    md:ml-5 
`}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 3.5em;
  left: -2em;
  max-width: none;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartDateCalendarOpen, setStartDateCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnDateCalendarOpen, setReturnDateCalendarOpen] = useState(false);

  const openStartDateCalendar = () => {
    setStartDateCalendarOpen(!isStartDateCalendarOpen);
    if (isReturnDateCalendarOpen) setReturnDateCalendarOpen(false);
  };

  const openReturnDateCalendar = () => {
    setReturnDateCalendarOpen(!isReturnDateCalendarOpen);
    if (isStartDateCalendarOpen) setStartDateCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openStartDateCalendar}>Pick Up Date </Name>
        {isStartDateCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartDateCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openReturnDateCalendar}>Return Date </Name>
        {isReturnDateCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnDateCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your ride" />
    </CardContainer>
  );
}
