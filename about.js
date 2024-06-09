const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");
const API = "https://dummyjson.com/products";

const price = document.getElementById("price");
const title = document.getElementById("title");
const prodImg = document.querySelector("img")

const updateUI = (product) => {
  price.textContent = `Price: ${product.price}`;
  title.textContent = product.title;
  prodImg.src = product.thumbnail
};

const getData = async (url, method = "GET", data) => {
  const request = await fetch(url, {
    method,
    headers: {
      "Contet-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });
  const responce = await request.json();
  return responce;
};

getData(API + `/${id}`)
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
