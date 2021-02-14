export function TimeToMins(timeString: string) {
  let split = timeString.split(":");

  return +(+split[0] * 60) + +split[1];
}
export function TimeToSecs(timeString: string) {
  let split = timeString.split(":");
  let hours = +split[0] * 60 * 60;
  let mins = +split[1] * 60;
  let sec = +split[2];
  return +hours + mins + sec;
}
export function TimeToHours(timeString: string) {
  let split = timeString.split(":");

  if (split[2]) {
    return +split[0] + +split[1] / 60 + +split[2] / 60 / 60;
  } else {
    return +split[0] + +split[1] / 60;
  }
}

export function SecsToTime(secs: number) {
  let mins = Math.floor(secs / 60);
  let leftOverSecs = secs % 60;
  let hours = Math.floor(mins / 60);
  mins = mins - hours * 60;
  return `${hours}:${mins}:${leftOverSecs}`;
}
