import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function logIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function getExtract(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/extract`, config);
  return promise;
}

function postExtract(body, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/extract`, body, config);
  return promise;
}

const api = {
  signUp,
  logIn,
  getExtract,
  postExtract,
};

export default api;

