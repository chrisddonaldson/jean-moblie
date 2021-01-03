import React from "react";
import { Text, View } from "react-native";
import { FormatLength } from "../../Utility/FormatLength";
import { happeningToday } from "../../Utility/IsHappeningToday";

// EVENT TICKET ==================================================================

interface EventTicket {
  e: event;
  view: "ALL" | "TODAY";
}
export const EventTicket = ({ e, view }: EventTicket) => {
  const isHappeningToday = happeningToday(e.routine) === "yes";
  let hidden = false;

  switch (view) {
    case "ALL":
      break;

    case "TODAY":
      if (!isHappeningToday) {
        hidden = true;
      }
  }

  return (
    <EventBox isToday={isHappeningToday} hidden={hidden}>
      <Stat>{e.description}</Stat>
      {"start_time" in e.period ? (
        <View>
          <Stat>Start time: {e.period.start_time}</Stat>
          <Stat>End time: {e.period.end_time}</Stat>
        </View>
      ) : (
        <Stat>Length: {FormatLength(e.period.length)}</Stat>
      )}
      <Stat>{e.routine}</Stat>
    </EventBox>
  );
};

interface EventBoxProps {
  isToday: boolean;
  hidden: boolean;
}

const EventBox = styled.View<EventBoxProps>`
  /* border: 1px solid black; */
  padding: 8px;
  border-radius: 4px;
  margin-top: 4px;

  background-color: ${colours.blue};
  display: ${(props) => (props.hidden ? "none" : "flex")};
`;
