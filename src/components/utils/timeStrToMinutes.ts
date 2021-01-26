const timeStrToMinutes = (timeStr: string): number => {
  const [hoursStr, minutesStr] = timeStr.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  return minutes + hours * 60;
}

export default timeStrToMinutes;
