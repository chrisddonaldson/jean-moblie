export interface UserDataInterface {
  firstName: string;
  secondName: string;
  gender: "Male" | "Female";
  weight: number;
  // British formatting
  dateOfBirth: string;
  weightGoal: 500 | -500;
  schedules: Schedule[];
}

export interface Schedule {
  name: string;
  color: string;
  events: event[];
}

export interface event {
  description: string | null;
  period: Period | Length;
  routine: null | Routine;
}

export interface Period {
  start_time: string;
  end_time: string;
}

export interface Length {
  // in hours (eg 6.25 = 6:15)
  length: number;
}

export type Routine =
  | "ON_WEEKDAYS"
  | "ON_WEEKENDS"
  | "ON_SATURDAY"
  | "EVERYDAY"
  | "ON_SUNDAY"
  | "ONCE_A_WEEK";
