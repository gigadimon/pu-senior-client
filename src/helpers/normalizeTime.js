function addZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

export const normalizeTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const currentSeconds = Math.floor(seconds - (hours * 3600 + minutes * 60));
  const string = `${addZero(hours)}:${addZero(minutes)}:${addZero(currentSeconds)}`;

  return { string, hours, minutes, seconds: currentSeconds };
};
