import axios from "axios";
const url = process.env.REACT_APP_STORE_API;
const accessToken = localStorage.getItem('accesstoken')

const config = {
  headers: {token: `${accessToken}`}
}

export async function fetchQuery(query: String) {
  const products = await axios.get(`${url}products?${query}`)

  return products.data
}

export async function fetchProducts() {
    const products = await axios.get(`${url}products`);

    return products.data;
  }

  export async function fetchMale() {
    const products = await axios.get(`${url}products?category=men`);

    return products.data;
  }
  export async function fetchFemale() {
    const products = await axios.get(`${url}products?category=women`);

    return products.data;
  }
  export async function fetchElectronics() {
    const products = await axios.get(`${url}products?category=electronics`);

    return products.data;
  }

  export async function fetchJewelry() {
    const products = await axios.get(`${url}products?category=jewelry`);

    return products.data;
  }



  
export async function fetchSingleProduct(productid: String) {
  const product = await axios.get(`${url}products/${productid}`);

  return product.data;
}

export async function ChiqLogin(email: String, password: String) {
  const user = await axios.post(`${url}auth/login`, {
    email: email,
    password: password,
  });
  return user.data;
}

export async function setFavorites(Userid: String, Favorites: any) {
  const setFavorites = await axios.put(`${url}users/${Userid}`, {
    favourites: Favorites
  }, config)
  return setFavorites.data;
}

export async function ChiqRegisterUser(
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  cpf: String
) {
  const products = await axios.post(`${url}auth/register`, {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    cpf: cpf,
  });
  return products.data;
}

