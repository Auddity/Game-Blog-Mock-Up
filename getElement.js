const getElement = selector => {
  const element = document.getElementById(selector);
  if(element) return element;
  throw new Error(`Check ${selector}, element not found`)
}

export default getElement;