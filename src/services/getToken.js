import { API_TOKEN } from './settings';

export default function getToken() {
  const apiURL = `${API_TOKEN}?command=request`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { token } = res;
      return token;
    });
}
