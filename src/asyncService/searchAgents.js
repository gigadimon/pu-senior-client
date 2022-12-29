import axios from 'axios';

export const searchAgents = async (query) => {
  const { data } = await axios(`${process.env.REACT_APP_SEARCH_AGENTS}${query}`);
  return data;
};
