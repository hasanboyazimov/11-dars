export const loading = (isPending) => {
    const container = document.querySelector('.container')
  const loader = document.querySelector(".loader");
  if (isPending) {
    container.classList.add('hidden')
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
    container.classList.remove('hidden')

  }
};
