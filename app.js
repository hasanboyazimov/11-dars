const API = "https://dummyjson.com/products";

const temp = document.querySelector("template");
const ul = document.querySelector("ul");

const updateUI = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    console.log(product)
    const clone = temp.content.cloneNode(true);

    const cardTitle = clone.querySelector(".card-title");
    const a = clone.querySelector("a");
    const prodImg = clone.querySelector('img')

    a.href = `/about.html?productID=${product.id}`;
    cardTitle.textContent = product.title;
    prodImg.src = product.thumbnail
    ul.appendChild(clone);
  });
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

getData(API)
  .then((data) => updateUI(data.products))
  .catch((error) => console.log(error));
