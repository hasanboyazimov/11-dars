export const loading = (isPending) => {
  const loader = document.querySelector(".loader");
  if (isPending) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};
