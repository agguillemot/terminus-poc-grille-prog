const formatTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time - (hours * 60);

  return `${`0${hours}`.slice(-2)}h${`0${minutes}`.slice(-2)}`
};

export default formatTime;
