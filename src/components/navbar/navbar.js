import "./navbar.css";
import { button } from "../button/button";
import { searchbar } from "../searchbar/searchbar";

export function navbar() {
  const navbar = `
    <ul class="navbar">
      <img src="/logo.png" alt="Painterest Logo">

      ${searchbar({})}
      ${button({ text: "Go", color: "light" })}

    </ul>
  `;
  return navbar;
}
