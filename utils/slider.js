import { get } from './getElement.js'

const circleLinks = get('circle-btns');

export const slider = () => {
  circleLinks.addEventListener('click', e => {
    const target = e.target;
    // console.log(target);
    // take parent and loop through it's children
    const circleArr = Array.from(circleLinks.children);
    circleArr.forEach(node => {
      console.log(node.classList);
      // TODO: Solve this if one then the other.
      if(target !== node.classList.contains('active-btn')) {
        target.classList.add('active-btn');
        node.classList.remove('active-btn');
      }
    })
    



    // target.classList.toggle('active-btn')
  })
}