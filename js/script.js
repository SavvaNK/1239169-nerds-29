// slider

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

// modal

const modalOpenBtn= document.querySelector(".map-contacts-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close")

modalOpenBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
