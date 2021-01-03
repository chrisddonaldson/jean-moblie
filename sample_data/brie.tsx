import { colours } from "../colours";
import { Schedule, UserDataInterface } from "./sample_data_types";

const workoutSchdule: Schedule = {
  name: "workouts",
  color: colours.red,
  events: [
    {
      description: "Upper Body Workout",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Lower Body Workout",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Run - Long + Slow",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Run - Short + Fast",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Run - Med",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Walk",
      period: { length: 0.5 },
      routine: "EVERYDAY",
    },
  ],
};

const workSchdule: Schedule = {
  name: "work",
  color: colours.green,
  events: [
    {
      description: "Sanger",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Bridges for Enterprise",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Korean Practice",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Korean Lessons",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Write up and Reading",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
  ],
};

const sleepSchedule: Schedule = {
  name: "sleep",
  color: colours.teal,

  events: [
    {
      description: "Big sleep",
      period: { start_time: "23:00", end_time: "6:30" },
      routine: "ON_WEEKDAYS",
    },
  ],
};

const dietSchedule: Schedule = {
  name: "diet",
  color: colours.yellow,

  events: [
    {
      description: "Lunch",
      period: { start_time: "13:00", end_time: "14:00" },
      routine: "EVERYDAY",
    },
    {
      description: "Snack",
      period: { start_time: "16:00", end_time: "16:05" },
      routine: "EVERYDAY",
    },
    {
      description: "Diner",
      period: { start_time: "18:00", end_time: "19:00" },
      routine: "EVERYDAY",
    },
  ],
};

export const brieData: UserDataInterface = {
  firstName: "Brie",
  secondName: "Howell",
  gender: "Female",
  weight: 69,
  dateOfBirth: "27/10/1994",
  weightGoal: -500,
  schedules: [sleepSchedule, workSchdule, workoutSchdule, dietSchedule],
};
