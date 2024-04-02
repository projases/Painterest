import "./searchbar.css";

export const searchbar = ({ text = "Search" }) => {
  return `
    <div class="searchContainer">
      <input class="search" placeholder="${text}">
      <img src="/cross.svg" alt="clear search" class="clear">
    </div>
  `;
};
