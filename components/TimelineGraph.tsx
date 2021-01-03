import React from "react";
import { Text, View } from "react-native";
import { Schedule } from "../sample_data/sample_data_types";

interface TimelineGraphInterface {
  schedule: Schedule;
}

export function TimelineGraph({ schedule }: TimelineGraphInterface) {
  return (
    <View>
      {schedule.events.map((v) => {
        v.description;
      })}
    </View>
  );
}
