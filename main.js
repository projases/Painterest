import { navbar } from "./src/components/navbar/navbar";
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

fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`)
  .then((response) => response.json())
  .then((data) => {
    console.log(gallery);
    data.forEach((photo, index) => {
      const img = document.createElement("img");
      img.src = photo.urls.regular;
      img.alt = photo.alt_description;
      gallery.append(img);

      if ((index + 1) % 3 === 0) {
        img.classList.add("large");
      } else if ((index + 1) % 2 === 0) {
        img.classList.add("medium");
      } else {
        img.classList.add("small");
      }
    });
  })

  .catch((error) => console.error("Error: ", error));

const search = document.querySelector(".search");
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      // Clear search
      gallery.innerHTML = "";

      data.results.forEach((photo, index) => {
        const img = document.createElement("img");
        img.src = photo.urls.regular;
        img.alt = photo.alt_description;
        gallery.append(img);

        if ((index + 1) % 3 === 0) {
          img.classList.add("large");
        } else if ((index + 1) % 2 === 0) {
          img.classList.add("medium");
        } else {
          img.classList.add("small");
        }
      });
    });
});
