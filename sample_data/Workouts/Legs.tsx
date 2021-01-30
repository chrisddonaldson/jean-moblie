// Weighted pull ups 8 x 5

import { SecsToTime, TimeToMins, TimeToSecs } from "../../Utility/TimeUtil";
import { Exercise } from "./ChinUps";
import { event } from "../sample_data_types";

export const HomeLegDay: Exercise[] = [
  {
    name: "Body Weight",
    reps: 20,
    sets: 3,
  },
  {
    name: "Single Leg Sqauts",
    reps: 6,
    sets: 4,
  },

  {
    name: "Brie Squats",
    reps: 8,
    sets: 5,
  },
  {
    name: "Weighted Lunges",
    reps: 8,
    sets: 3,
  },
  {
    name: "Split Squat",
    reps: 8,
    sets: 3,
  },
  {
    name: "Side Steps",
    reps: 8,
    sets: 3,
  },
  {
    name: "Sissy Squats",
    reps: 15,
    sets: 3,
  },

  {
    name: "Regular Pull ups",
    reps: 8,
    sets: 3,
  },

  {
    name: "On your knees lean back",
    reps: 3,
    sets: 3,
  },

  {
    name: "Decline Single Leg Squats ",
    reps: 6,
    sets: 4,
  },
  {
    name: "Single Calf Raises - Weighted",
    reps: 30,
    sets: 4,
  },
  {
    name: "Double Calf Raises - Weighted ",
    reps: 6,
    sets: 3,
  },
];

/*
{
    description: "Jean",
    period: { start_time: "8:30", end_time: "9:30" },
    routine: "ON_WEEKDAYS",
  },
*/
export function LegDayMakeWorkout(exercise: Exercise[]) {
  let startTime = "17:05:00";
  const work = 30;
  const rest = 60;
  let results: event[] = [];
  const startTimeInSecs = +TimeToSecs(startTime);
  console.log(startTimeInSecs);
  let setCount = 0;
  exercise.map((v, i) => {
    //The first one is going to be
    for (let j = 0; j < v.sets; j++) {
      results.push({
        description: `set:${setCount + 1} - ${v.name} x ${v.reps}`,
        period: {
          start_time: SecsToTime(startTimeInSecs + (work + rest) * setCount),
          end_time: SecsToTime(
            startTimeInSecs + (work + rest) * setCount + work
          ),
        },

        routine: "ONCE_A_WEEK",
      });
      setCount++;
    }
  });
  console.log(results);
  return results;
}
