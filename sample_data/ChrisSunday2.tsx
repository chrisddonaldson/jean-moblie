import { colours } from "../colours";
import { Schedule, UserDataInterface } from "./sample_data_types";
import { HomeHandstandDay } from "./Workouts/Handstand";
import { MakeWorkout } from "./Workouts/MakeWorkout";
import { HomePushupDay } from "./Workouts/PushUps";

const workoutSchdule: Schedule = {
  name: "workouts",
  color: colours.red,
  events: [
    {
      description: "Walk",
      period: { start_time: "9:30", end_time: "10:00" },
      routine: "EVERYDAY",
    },
    ...MakeWorkout(HomeHandstandDay, "17:00:00"),
  ],
};

const hygeneSchdule: Schedule = {
  name: "work",
  color: colours.teal,
  events: [
    {
      description: "Shower",
      period: { start_time: "06:00", end_time: "06:10" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Shower",
      period: { start_time: "18:00", end_time: "18:30" },
      routine: "ON_WEEKDAYS",
    },
  ],
};

const workSchdule: Schedule = {
  name: "work",
  color: colours.green,
  events: [
    {
      description: "Sesh1",
      period: { start_time: "07:30", end_time: "9:30" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Sesh2",
      period: { start_time: "11:00", end_time: "13:00" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Sesh3",
      period: { start_time: "14:00", end_time: "17:00" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Sesh4",
      period: { start_time: "19:00", end_time: "20:30" },
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
      period: { start_time: "00:00", end_time: "06:00" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Big sleep",
      period: { start_time: "23:00", end_time: "24:00" },
      routine: "ON_WEEKDAYS",
    },
  ],
};

const recreactionSchedule: Schedule = {
  name: "Recreaction",
  color: colours.green,

  events: [],
};

const dietSchedule: Schedule = {
  name: "diet",
  color: colours.yellow,

  events: [
    {
      description: "Breakfast - 6 eggs + Toast",
      period: { start_time: "06:10", end_time: "06:30" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Snack - Protein Shake + other treats + Break",
      period: { start_time: "10:30", end_time: "11:00" },
      routine: "EVERYDAY",
    },
    {
      description: "Lunch - MEAT",
      period: { start_time: "13:00", end_time: "14:00" },
      routine: "EVERYDAY",
    },
    {
      description: "Snack",
      period: { start_time: "17:00", end_time: "17:10" },
      routine: "EVERYDAY",
    },
    {
      description: "Dinner",
      period: { start_time: "19:30", end_time: "20:30" },
      routine: "EVERYDAY",
    },
  ],
};

export const chrisData: UserDataInterface = {
  firstName: "Chris",
  secondName: "Donaldson",
  gender: "Male",
  weight: 94,
  dateOfBirth: "13/02/1995",
  weightGoal: 500,
  schedules: [
    sleepSchedule,
    workSchdule,
    workoutSchdule,
    dietSchedule,
    hygeneSchdule,
    recreactionSchedule,
  ],
};
