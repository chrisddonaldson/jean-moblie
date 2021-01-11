import { colours } from "../colours";
import { Schedule, UserDataInterface } from "./sample_data_types";

const workoutSchdule: Schedule = {
  name: "workouts",
  color: colours.red,
  events: [
    {
      description: "Shoulder Day",
      period: { start_time: "11:30", end_time: "12:30" },
      routine: "ONCE_A_WEEK",
    },

    {
      description: "Walk",
      period: { start_time: "9:30", end_time: "10:00" },
      routine: "EVERYDAY",
    },
  ],
};

const workSchdule: Schedule = {
  name: "work",
  color: colours.green,
  events: [
    {
      description: "Jean",
      period: { start_time: "8:30", end_time: "9:30" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Digital Labs",
      period: { start_time: "10:00", end_time: "11:00" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Digital Labs",
      period: { start_time: "14:00", end_time: "16:30" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Digital Labs",
      period: { start_time: "17:00", end_time: "18:00" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Digital Labs",
      period: { start_time: "19:00", end_time: "22:00" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Duolingo",
      period: { start_time: "16:35", end_time: "17:00" },
      routine: "EVERYDAY",
    },

    // {
    //   description: "Project",
    //   period: { start_time: "10:20", end_time: "13:00" },
    //   routine: "ON_SUNDAY",
    // },
    // {
    //   description: "Project",
    //   period: { length: 1 },
    //   routine: "EVERYDAY",
    // },
  ],
};

const sleepSchedule: Schedule = {
  name: "sleep",
  color: colours.teal,

  events: [
    {
      description: "Big sleep",
      period: { start_time: "00:00", end_time: "07:30" },
      routine: "ON_WEEKDAYS",
    },
    // {
    //   description: "Little sleep",
    //   period: { start_time: "16:00", end_time: "16:20" },
    //   routine: "ON_WEEKDAYS",
    // },
    {
      description: "Big sleep",
      period: { start_time: "23:00", end_time: "24:00" },
      routine: "ON_WEEKDAYS",
    },
  ],
};

const dietSchedule: Schedule = {
  name: "diet",
  color: colours.yellow,

  events: [
    {
      description: "Breakfast",
      period: { start_time: "11:00", end_time: "11:30" },
      routine: "EVERYDAY",
    },

    {
      description: "Snack",
      period: { start_time: "20:00", end_time: "20:05" },
      routine: "EVERYDAY",
    },
    {
      description: "Lunch",
      period: { start_time: "13:00", end_time: "14:00" },
      routine: "EVERYDAY",
    },
    {
      description: "Snack",
      period: { start_time: "16:30", end_time: "16:35" },
      routine: "EVERYDAY",
    },
    {
      description: "Diner",
      period: { start_time: "18:00", end_time: "19:00" },
      routine: "EVERYDAY",
    },
  ],
};

export const chrisData: UserDataInterface = {
  firstName: "Chris",
  secondName: "Donaldson",
  gender: "Male",
  weight: 92,
  dateOfBirth: "13/02/1995",
  weightGoal: 500,
  schedules: [sleepSchedule, workSchdule, workoutSchdule, dietSchedule],
};
