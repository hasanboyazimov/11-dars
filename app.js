import { loading } from "./loading.js";

const API = "https://dummyjson.com/products";
const temp = document.querySelector("template");
const ul = document.querySelector("ul");

const updateUI = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    console.log(product);
    const clone = temp.content.cloneNode(true);

    const cardTitle = clone.querySelector(".card-title");
    const a = clone.querySelector(".read-more");
    const imgLink = clone.querySelector(".img-link");
    const prodImg = clone.querySelector("img");

    a.href = `/about.html?productID=${product.id}`;
    imgLink.href = `/about.html?productID=${product.id}`;
    cardTitle.textContent = product.title;
    prodImg.src = product.thumbnail;
    ul.appendChild(clone);
  });
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

getData(API)
  .then((data) => updateUI(data.products))
  .catch((error) => console.log(error));
