import { Schedule, UserDataInterface } from "./sample_data_types";

const workoutSchdule: Schedule = {
  name: "workouts",
  color: "green",
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
      description: "Pull up Day",
      period: { length: 1 },
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
  color: "red",
  events: [
    {
      description: "Digital Labs",
      period: { length: 6 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Visio Impulse",
      period: { length: 1 },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Visio Impulse",
      period: { length: 1 },
      routine: "ON_WEEKDAYS",
    },

    {
      description: "Duolingo",
      period: { length: 1 / 3 },
      routine: "EVERYDAY",
    },

    {
      description: "Project",
      period: { length: 6 },
      routine: "ON_SUNDAY",
    },
    {
      description: "Project",
      period: { length: 1 },
      routine: "EVERYDAY",
    },
  ],
};

const sleepSchedule: Schedule = {
  name: "sleep",
  color: "blue",

  events: [
    {
      description: "Big sleep",
      period: { start_time: "23:00", end_time: "5:30" },
      routine: "ON_WEEKDAYS",
    },
    {
      description: "Little sleep",
      period: { start_time: "16:00", end_time: "16:20" },
      routine: "ON_WEEKDAYS",
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
  schedules: [sleepSchedule, workSchdule, workoutSchdule],
};