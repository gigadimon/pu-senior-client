import axios from 'axios';

export const getWebimState = async () => {
  const { data } = await axios(`${process.env.REACT_APP_WEBIM_CURRENT_URL}`);
  return data;
};
