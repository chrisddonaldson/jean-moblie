// Weighted pull ups 8 x 5

import { SecsToTime, TimeToMins, TimeToSecs } from "../../Utility/TimeUtil";

export interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

export const HomePullupDay: Exercise[] = [
  {
    name: "Weighted pull ups",
    reps: 8,
    sets: 5,
  },
  {
    name: "Front Leaver Swings",
    reps: 3,
    sets: 3,
  },
  {
    name: "Wide alternating pull ups ",
    reps: 8,
    sets: 3,
  },

  {
    name: "High Pull ups",
    reps: 8,
    sets: 3,
  },

  {
    name: "Regular Pull ups",
    reps: 8,
    sets: 3,
  },

  {
    name: "Declines Pull ups",
    reps: 3,
    sets: 3,
  },
  {
    name: "16 kg curls ",
    reps: 6,
    sets: 4,
  },

  {
    name: "16 kg curls ",
    reps: 6,
    sets: 4,
  },

  {
    name: "8kg curls ",
    reps: 12,
    sets: 4,
  },
  {
    name: "Focus 8kg curls ",
    reps: 6,
    sets: 3,
  },

  {
    name: "Focus band curls ",
    reps: 25,
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
export function makeWorkout(exercise: Exercise[]) {
  let startTime = "09:02:00";
  const work = 30;
  const rest = 60;
  let results = [];
  const startTimeInSecs = +TimeToSecs(startTime);
  console.log(startTimeInSecs);
  let setCount = 0;
  exercise.map((v, i) => {
    //The first one is going to be
    for (let j = 0; j < v.sets; j++) {
      results.push({
        description: `set:${setCount + 1} - ${v.name} x ${v.reps}`,
        startTime: SecsToTime(startTimeInSecs + (work + rest) * setCount),
        endTime: SecsToTime(startTimeInSecs + (work + rest) * setCount + work),
      });
      setCount++;
    }
  });
  console.log(results);
  return results;
}
