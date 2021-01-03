// HAPPENING TODAY =============================================

import { Routine } from "../sample_data/sample_data_types";

export function happeningToday(routine: Routine | null) {
  let dt = new Date();
  switch (routine) {
    case "EVERYDAY":
      return "yes";
    case "ONCE_A_WEEK":
      return "maybe";
    case "ON_SATURDAY":
      return dt.getDay() == 6 ? "yes" : "no";
    case "ON_SUNDAY":
      return dt.getDay() == 0 ? "yes" : "no";
    case "ON_WEEKDAYS":
      return dt.getDay() == 6 || 0 ? "no" : "yes";
    case "ON_WEEKDAYS":
      return dt.getDay() == 6 || 0 ? "yes" : "no";
  }
}
