import axios from 'axios';

export async function authService(action, body) {
  const res =
    action === 'registration'
      ? await axios.post(process.env.REACT_APP_REGISTRATION, body)
      : await axios.post(process.env.REACT_APP_LOGIN, body);
  console.log(res);

  return res.data;
}
