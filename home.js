import { getData } from "./request.js";

const API = "https://dummyjson.com/products?limit=194";
const tempPopular = document.querySelector("#most-popular-tempate");
const tempDiscount = document.querySelector("#discount-template");
const mostPopularList = document.querySelector(".most-popular-list");
const discountList = document.querySelector(".discount-list");
const updateUI = (products) => {
  products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 4)
    .forEach((product) => {
      console.log(product);
      const clonePopular = tempPopular.content.cloneNode(true);
      const a = clonePopular.querySelector(".read-more");
      const imgLink = clonePopular.querySelector(".img-link");
      const popularTitle = clonePopular.querySelector(".popular-title");
      const popularImg = clonePopular.querySelector(".popular-img");
      a.href = `/about.html?productID=${product.id}`;
      imgLink.href = `/about.html?productID=${product.id}`;
      popularTitle.textContent = product.title;
      popularImg.src = product.thumbnail;
      mostPopularList.appendChild(clonePopular);
    });

  products
    .sort((a, b) => {
      return b.discountPercentage - a.discountPercentage;
    })
    .slice(0, 4)
    .forEach((product) => {
      const cloneDiscount = tempDiscount.content.cloneNode(true);
      const a = cloneDiscount.querySelector(".read-more");
      const imgLink = cloneDiscount.querySelector(".img-link");
      const discountTitle = cloneDiscount.querySelector(".discount-title");
      const discountImg = cloneDiscount.querySelector(".discount-img");
      a.href = `/about.html?productID=${product.id}`;
      imgLink.href = `/about.html?productID=${product.id}`;
      discountTitle.textContent = product.title;
      discountImg.src = product.thumbnail;
      discountList.appendChild(cloneDiscount);
    });

  // console.log(mostPopular)

  // const cardTitle = clone.querySelector(".card-title");
  // const a = clone.querySelector(".read-more");
  // const imgLink = clone.querySelector(".img-link");
  // const prodImg = clone.querySelector("img");

  // a.href = `/about.html?productID=${product.id}`;
  // imgLink.href = `/about.html?productID=${product.id}`;
  // cardTitle.textContent = product.title;
  // prodImg.src = product.thumbnail;
  // ul.appendChild(clone);
  //   });
};

getData(API)
  .then((data) => updateUI(data.products))
  .catch((error) => console.log(error));
