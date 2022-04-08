import { get } from './getElement.js'

const circleLinks = get('circle-btns');

export const slider = () => {
  circleLinks.addEventListener('click', e => {
    const target = e.target;
    const circleArr = Array.from(circleLinks.children);
    circleArr.forEach(node => {
      if(target !== node.classList.contains('active-btn')) {
        node.classList.remove('active-btn');
      }
      target.classList.add('active-btn');
    });
  });
}