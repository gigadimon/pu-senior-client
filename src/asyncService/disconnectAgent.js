import axios from 'axios';

export async function disconnectAgent(id) {
  const { data } = await axios(`${process.env.REACT_APP_TO_OFFLINE}${id}`);
  return data;
}
