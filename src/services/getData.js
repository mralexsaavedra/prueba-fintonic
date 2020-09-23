import { API_URL } from './settings';

const fromApiResponseToData = (apiResponse) => {
  if (apiResponse.response_code === 0) {
    return apiResponse.results;
  }
  return [];
};

export default function getData({ token }) {
  const apiURL = `${API_URL}?amount=10&token=${token}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}
