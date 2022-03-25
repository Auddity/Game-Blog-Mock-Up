import get from "./getElement.js";

const dropDownMenu = get('drop-down-menu')
get('menu-btn').addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
});
