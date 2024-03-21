import "./searchbar.css";

export const searchbar = ({ text = "Search" }) => {
  return `<input class="search" placeholder="${text}">`;
};
