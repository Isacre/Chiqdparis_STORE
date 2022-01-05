import axios from "axios";

const url = process.env.REACT_APP_STORE_API;

export async function ChiqLogin(email, password) {
  const products = await axios.post(`${url}/login`, {
    email: email,
    password: password,
  });
  return products.data;
}

export async function ChiqRegisterUser(
  firstname,
  lastname,
  email,
  password,
  cpf
) {
  const products = await axios.post(`${url}/register`, {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    cpf: cpf,
  });
  return products.data;
}

export async function GetStoreProducts() {
  const products = await axios.get(`${url}/products`);
  return products.data;
}
