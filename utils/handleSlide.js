import { get } from './getElement.js'
import { slideFunction } from './slideFunction.js';
import { data } from './heroData.js';

const circleLinks = get('circle-btns');
const next = get('next');


export const handleLinks = () => {
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
};

export const handleSlide = () => {
  next.addEventListener('click', () => {
    slideFunction();
  });
};