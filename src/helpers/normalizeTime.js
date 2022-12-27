export const normalizeTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const currentSeconds = Math.floor(seconds - (hours * 3600 + minutes * 60));
  const string = `${hours.toString().length < 2 ? `0${hours}` : hours}:${
    minutes.toString().length < 2 ? `0${minutes}` : minutes
  }:${
    currentSeconds.toString().length < 2 ? `0${currentSeconds}` : currentSeconds
  }`;

  return { string, hours, minutes, seconds: currentSeconds };
};
