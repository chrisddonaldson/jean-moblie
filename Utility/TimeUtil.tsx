export function TimeToMins(timeString: string) {
  let split = timeString.split(":");

  return +(+split[0] * 60) + +split[1];
}
