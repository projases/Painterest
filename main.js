import { navbar } from "./src/components/navbar/navbar";
import { search } from "./src/utils/search";
import { paint } from "./src/utils/paint";
import { randomQuery } from "./src/utils/randomQuery";
// import { imageContainer } from "./src/components/imgGrid/imgGrid";

import "./style.css";
const accessKey = "pd8stjR7GiEWiGPtVxUJQ8y1eq1q3snZenqxyJDBaOU";

// No entiendo porque no puedo acceder a app, existe en el HTML pero no sale en el browser
const app = document.querySelector("#app");

//
const naviHTML = navbar({});
document.body.innerHTML = naviHTML;

// Intente hacerlo como componente pero no me permitió agregar imagenes
const gallery = document.createElement("div");
gallery.className = "gallery";
document.body.appendChild(gallery);
//Primer pintado random
try {
  const results = await randomQuery();
  paint(results);
} catch (error) {
  console.error("Error: ", error);
}

const go = document.querySelector("button");
const clear = document.querySelector(".clear");

clear.addEventListener("click", async () => {
  document.querySelector(".search").value = "";
  const results = await randomQuery();
  paint(results);
});

go.addEventListener("click", async () => {
  // alert("click");
  const query = document.querySelector(".search").value.toLowerCase();
  // Check if query is empty
  if (query === "") {
    return;
  }
  try {
    const results = await search(query);
    paint(results);
  } catch (error) {
    console.error("Error: ", error);
  }
});
