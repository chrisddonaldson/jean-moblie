import React from "react";
import { Text, View } from "react-native";
import { happeningToday } from "../../Utility/IsHappeningToday";

// EVENT TIMELINE ================================================

export const EventTimeline = ({ e, view }: EventTicket) => {
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
    <TimelineBox isToday={isHappeningToday} hidden={hidden}>
      <Stat>{e.description}</Stat>
      {"start_time" in e.period ? (
        <Stat>
          {e.period.start_time} - {e.period.end_time}
        </Stat>
      ) : (
        <Stat>{FormatLength(e.period.length)}</Stat>
      )}
      {/* <Stat>{e.routine}</Stat> */}
    </TimelineBox>
  );
};
