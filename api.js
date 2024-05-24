const getMonChien = async () => {
  let response = await fetch("https://random.dog/woof.json");
  let results = await response.json();

  console.log(results.url);

  const image = document.createElement("img");
  image.src = results.url;
  document.getElementById("app").appendChild(image);
};

//getMonChien();

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const getMonChienSansAsync = () => {
  sleep(2000)
    .then(() => fetch("https://random.dog/woof.json"))
    .then((response) => response.json())
    .then((results) => {
      console.log(results.url);

      const image = document.createElement("img");
      image.src = results.url;
      document.getElementById("app").appendChild(image);
    })
    .finally(() => {
      document.querySelector(".loader").style.display = "none";
    });
};
getMonChienSansAsync();
