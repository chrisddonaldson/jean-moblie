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

export function SecsToTime(secs: number) {
  console.log("===========");
  console.log("starting");
  console.log("number of seconds:" + secs);
  let mins = Math.floor(secs / 60);

  console.log("number of mins: " + mins);
  let leftOverSecs = secs % 60;

  console.log(leftOverSecs);
  let hours = Math.floor(mins / 60);
  console.log("number of hours:" + hours);
  mins = mins - hours * 60;
  console.log();
  return `${hours}:${mins}:${leftOverSecs}`;
}
