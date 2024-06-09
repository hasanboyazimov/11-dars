import { getData } from "./request.js";
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



getData(API + `/${id}`)
  .then((data) => updateUI(data))
  .catch((err) => console.log(err));
