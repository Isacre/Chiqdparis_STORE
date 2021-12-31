import axios from "axios";

const url = process.env.REACT_APP_DUMMY_API;

export async function GetProducts() {
  const products = await axios.get(`${url}`);
  return products.data;
}
