document.addEventListener("scroll", (e) => {
  //j'ajoute un écouteur d'évènement sur le scroll
  console.log(window.scrollY); //j'affiche dans la console le niveau de scroll
  let header = document.querySelector("header"); //je sélectionne mon header sur ma page
  if (window.scrollY > 10) {
    //jouer l'instruction si j'ai descendu plus de 99px
    //header.style.minHeight = "0px";
    header.className = "hide_header";
  } else {
    //sinon, je remets mon header en grande taille
    // header.style.minHeight = "100px";
    header.className = "display_header";
  }
});

let burger = document.getElementById("burger");

burger.addEventListener("click", (event) => {
  let sidebar = document.getElementById("side_menu");
  sidebar.style.display = "block";
  let menu = document.querySelector("#side_menu > div");
  console.log(menu);
  menu.className = "display_menu";
});

let sidebar = document.getElementById("side_menu");
sidebar.addEventListener("click", (event) => {
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 1000);
  let menu = document.querySelector("#side_menu > div");
  menu.className = "hide_menu";
});
