import { loading } from "./loading.js";

const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");
const API = "https://dummyjson.com/products";

const price = document.getElementById("price");
const title = document.getElementById("title");
const prodImg = document.querySelector("img");
const description = document.querySelector(".description");

const updateUI = (product) => {
  price.textContent = `Price: ${product.price}`;
  title.textContent = product.title;
  prodImg.src = product.thumbnail;
  description.textContent = product.description;
};

const getData = async (url) => {
  try {
    loading(true);
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Something went wrong :(");
    }
    const responce = await request.json();
    loading(false);
    return responce;
  } catch (error) {
    loading(false);
    return error.message;
  }
};

getData(API + `/${id}`)
  .then((data) => updateUI(data))
  .catch((err) => console.log(err));
