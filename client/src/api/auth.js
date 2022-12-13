import axios from "axios";
// allows you to check the cookie sent to server
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:8000/api/register",
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios.post("http://localhost:8000/api/login", loginData);
}

export async function onLogout() {
  return await axios.get("http://localhost:8000/api/logout");
}

export async function onFetchProtectedInfo() {
  return await axios.get("http://localhost:8000/api/protected");
}
