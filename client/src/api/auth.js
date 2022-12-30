import axios from "axios";
// allows you to check the cookie sent to server
axios.defaults.withCredentials = true;

const baseURL =
  process.env.NODE_ENV === "production" ? "api/" : "http://localhost:8000/api/";

export async function onRegistration(registrationData) {
  return await axios.post(
    // "http://localhost:8000/api/register",
    `${baseURL}register`,
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios.post(
    // "http://localhost:8000/api/login"
    `${baseURL}login`,
    loginData
  );
}

export async function onLogout() {
  return await axios.get(
    // "http://localhost:8000/api/logout"
    `${baseURL}logout`
  );
}

export async function onFetchProtectedInfo() {
  return await axios.get(
    // "http://localhost:8000/api/protected"
    `${baseURL}protected`
  );
}
