export function GetCurrentTime() {
  const today = new Date();
  return today.getHours() + ":" + today.getMinutes();
}

export function GetCurrentTimeFromDate(today: Date) {
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);
  return time;
}

export function GetDisplayTimeFormat(today: Date) {
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let hoursS = hours + "";

  let minutesS = minutes + "";

  let secondsS = seconds + "";

  if (hours < 10) {
    hoursS = "0" + hours;
  }
  if (minutes < 10) {
    minutesS = "0" + minutes;
  }
  if (seconds < 10) {
    secondsS = "0" + seconds;
  }
  return hoursS + ":" + minutesS + ":" + secondsS;
}
