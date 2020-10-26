// const [btn1, btn2, btn3] = document.querySelectorAll('.slider-controls-button');

// const [slide1, slide2, slide3] = document.querySelectorAll('.slider-item');

// btn1.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   btn1.classList.add('slider-controls-button-cur');
//   btn2.classList.remove('slider-controls-button-cur');
//   btn3.classList.remove('slider-controls-button-cur');
//   slide1.classList.remove('visually-hidden');
//   slide2.classList.add('visually-hidden');
//   slide3.classList.add('visually-hidden');
// });
// btn2.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   btn1.classList.remove('slider-controls-button-cur');
//   btn2.classList.add('slider-controls-button-cur');
//   btn3.classList.remove('slider-controls-button-cur');
//   slide1.classList.add('visually-hidden');
//   slide2.classList.remove('visually-hidden');
//   slide3.classList.add('visually-hidden');
// });
// btn3.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   btn1.classList.remove('slider-controls-button-cur');
//   btn2.classList.remove('slider-controls-button-cur');
//   btn3.classList.add('slider-controls-button-cur');
//   slide1.classList.add('visually-hidden');
//   slide2.classList.add('visually-hidden');
//   slide3.classList.remove('visually-hidden');
// });


const btnList = document.querySelectorAll('.slider-controls-button');

const slideList = document.querySelectorAll('.slider-item');

for (let i = 0; i < btnList.length; i += 1) {
  btnList[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let j = 0; j < btnList.length; j += 1) {
      if (i === j) {
        btnList[j].classList.add('slider-controls-button-cur');
        slideList[j].classList.remove('visually-hidden');
      } else {
        btnList[j].classList.remove('slider-controls-button-cur');
        slideList[j].classList.add('visually-hidden');
      }
    }
  }
  )
}
