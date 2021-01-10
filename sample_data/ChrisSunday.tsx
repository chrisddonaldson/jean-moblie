import { colours } from "../colours";
import { Schedule, UserDataInterface } from "./sample_data_types";

const workoutSchdule: Schedule = {
  name: "workouts",
  color: colours.red,
  events: [
    {
      description: "Pressup Day",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Handstand Day",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Press Up Day + Handstand",
      period: { start_time: "10:00", end_time: "11:00" },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Pistol Squat Day",
      period: { length: 1 },
      routine: "ONCE_A_WEEK",
    },
    {
      description: "Explosive Day",
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
    // {
    //   description: "Digital Labs",
    //   period: { length: 6 },
    //   routine: "ON_WEEKDAYS",
    // },
    // {
    //   description: "Visio Impulse",
    //   period: { length: 1 },
    //   routine: "ON_WEEKDAYS",
    // },
    {
      description: "Visio Impulse",
      period: { start_time: "11:20", end_time: "12:30" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Visio Impulse",
      period: { start_time: "13:30", end_time: "16:30" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Visio Impulse",
      period: { start_time: "17:00", end_time: "19:00" },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Visio Impulse",
      period: { start_time: "20:00", end_time: "22:00" },
      routine: "ON_WEEKDAYS",
    },

    // {
    //   description: "Duolingo",
    //   period: { start_time: "13:00", end_time: "13:20" },
    //   routine: "EVERYDAY",
    // },

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
      period: { start_time: "00:00", end_time: "08:30" },
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
      period: { start_time: "9:30", end_time: "10:00" },
      routine: "EVERYDAY",
    },

    {
      description: "Snack",
      period: { start_time: "11:00", end_time: "11:05" },
      routine: "EVERYDAY",
    },
    {
      description: "Lunch",
      period: { start_time: "12:30", end_time: "13:00" },
      routine: "EVERYDAY",
    },
    {
      description: "Snack",
      period: { start_time: "16:30", end_time: "16:35" },
      routine: "EVERYDAY",
    },
    {
      description: "Diner",
      period: { start_time: "19:00", end_time: "20:00" },
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
