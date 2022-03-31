export const get = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Check ${selector}, element not found`)
}

export const getQuery = selector => {
  const elements = document.querySelectorAll(selector);
  if(elements) return elements;
  throw new Error(`Check ${selector}, elements not found`);
}
