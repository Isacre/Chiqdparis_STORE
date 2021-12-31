import axios from "axios";

const url = process.env.REACT_APP_STORE_API;


export async function ChiqLogin(email, password) {
  const products = await axios.get(`${url}/login`, {
    email: email,
    password: password,
  });
  return products.data;
}

export async function ChiqRegisterUser(username, email, password) {
  const products = await axios.post(`${url}/register`, {
    username: username,
    email: email,
    password: password,
  });
  return products.data;
}
