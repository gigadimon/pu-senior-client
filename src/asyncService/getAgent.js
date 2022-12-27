import axios from "axios";

export const getAgent = async (agentId) => {
  const { data } = await axios(
    `${process.env.REACT_APP_AGENT_BASE_URL}/${agentId}`
  );

  return data;
};
