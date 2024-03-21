import { button } from "./src/components/button/button";
import { navbar } from "./src/components/navbar/navbar";

import "./style.css";

const app = document.querySelector("#app");

// Generate navbar HTML content
const naviHTML = navbar({});
document.body.innerHTML = naviHTML; // Append navbar HTML to the body

// Create homeButton element using the button function
// const homeButton = button({ text: "Home", color: "Dark" });

// Append homeButton to the navbar
// document.querySelector(".navbar").appendChild(homeButton);
