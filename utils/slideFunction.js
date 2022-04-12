import { get } from './getElement.js';
import { data } from './heroData.js';

const container = get('hero');

container.innerHTML = data.map((info, idx) => {
  const { id, title, desc } = info;
  let position = 'next';
  if(idx === 0) position = 'active';
  if(idx === data.length - 1) position = 'last';

  return `
    <div class="hero-info ${position}">
      <h1 class="title" id="main-title">${title}</h1>
      <p class="desc-block" id="desc-block">
        ${desc}
      </p>
      <a href="#" class="main-rect-btn uppercase" id="main-btn">
        <span>
          read more
        </span>
        <i class="ri-arrow-right-s-line ri-3x accent"></i>
        <i class="ri-arrow-right-s-line ri-3x accent"></i>
      </a>
    </div>
  `;
}).join('');

export const slideFunction = () => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if(!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  active.classList.add('last')

  next.classList.remove(['next']);
  next.classList.add('active');

  last.classList.remove(['last']);
  last.classList.add('next');
  console.log(data);
}