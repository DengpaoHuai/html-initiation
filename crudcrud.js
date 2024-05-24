document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    titre: formData.get("titre"),
    auteur: formData.get("auteur"),
    date: formData.get("date"),
    nbPages: formData.get("nbPages"),
    resume: formData.get("resume"),
  };
  console.log(data);

  fetch("https://crudcrud.com/api/d6221080178c4f70a54ece7a3803897c/books", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const book = document.createElement("div");
      book.innerHTML = `
            <h2>${result.titre}</h2>
            <p>${result.auteur}</p>
            <p>${result.date}</p>
            <p>${result.nbPages}</p>
            <p>${result.resume}</p>
            `;
      document.getElementById("books").appendChild(book);
    })
    .finally(() => {
      event.target.reset();
    });
});

const getDatas = async () => {
  let response = await fetch(
    "https://crudcrud.com/api/d6221080178c4f70a54ece7a3803897c/books"
  );
  let results = await response.json();
  console.log(results);
  results.forEach((result) => {
    const book = document.createElement("div");
    book.innerHTML = `
        <h2>${result.titre}</h2>
        <p>${result.auteur}</p>
        <p>${result.date}</p>
        <p>${result.nbPages}</p>
        <p>${result.resume}</p>
        `;
    document.getElementById("books").appendChild(book);
  });
};

getDatas();
