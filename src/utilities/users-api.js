import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  console.log("USER DATA SIGN UP", userData)
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function fetchUser(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}