import { SecsToTime, TimeToMins, TimeToSecs } from "../../Utility/TimeUtil";
import { event } from "../sample_data_types";
export interface Exercise {
  name: string;
  reps: number;
  sets: number;
}
export function MakeWorkout(exercise: Exercise[], startTime: string) {
  // let startTime = "17:05:00";
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
