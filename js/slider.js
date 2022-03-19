'use strict'
let offset = 0;
const btnLeft = document.querySelector('.arrow-l'),
      btnRight = document.querySelector('.arrow-r'),
      sliderLine = document.querySelector('.slider-line');

btnRight.addEventListener('click', () => {
    offset += 1029;
    if (offset > 3087) {
        offset = 0;
    }
    sliderLine.style.left = -offset  + 'px';
}) 

btnLeft.addEventListener('click', () => {
    offset -= 1029;
    if (offset < 0) {
        offset = 3087;
    }
    sliderLine.style.left = -offset  + 'px';
}) 

      
