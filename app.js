import get from "./getElement.js";

// Mobile Drop Down Menu
const dropDownLinks = get('drop-down-links');
const dropDownContainer = get('drop-down-container');
get('menu-btn').addEventListener('click', () => {
  const linksHeight = dropDownLinks.getBoundingClientRect().height;
  const containerHeight = dropDownContainer.getBoundingClientRect().height;
  containerHeight === 0 
    ? dropDownContainer.style.height = `${linksHeight}px`
    : dropDownContainer.style.height = 0;
});
