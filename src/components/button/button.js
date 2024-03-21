import "./button.css";

export const button = ({ text = "button", color = "dark" }) => {
  return `<button class="button ${color}">${text}</button>`;
};
