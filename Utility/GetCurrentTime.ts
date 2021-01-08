export function GetCurrentTime() {
  const today = new Date();
  return today.getHours() + ":" + today.getMinutes();
}
