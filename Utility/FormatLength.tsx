// FORMAT LENGTH ====================================================================

export function FormatLength(length: number) {
  const mins = Math.round(length * 60);
  if (mins < 60) {
    return `${mins}mins`;
  } else {
    const hours = Math.floor(mins / 60);
    const additionalMins = mins - hours * 60;
    if (additionalMins > 0) {
      return `${hours}hrs ${additionalMins}mins`;
    } else {
      return `${hours}hrs`;
    }
  }
}
