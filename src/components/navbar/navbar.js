import "./navbar.css";
import { button } from "../button/button";
import { searchbar } from "../searchbar/searchbar";

export function navbar() {
  const navbar = `
    <ul class="navbar">
      <img src="/Users/pablorojas/Documents/GitHub/Frontend/javascript/Painterest/src/assets/painterest.png" alt="Painterest Logo">
      ${button({ text: "Home", color: "dark" })}
      ${button({ text: "Create", color: "light" })}
      ${button({ text: "Go", color: "light" })}
      ${searchbar({})}
    </ul>
  `;
  return navbar;
}