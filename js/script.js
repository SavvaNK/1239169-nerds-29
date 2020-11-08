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
  })
}

// modal

const modalOpenBtn= document.querySelector(".map-contacts-button");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close")
const name = modal.querySelector("[name=name]");
const email = modal.querySelector("[name=email]");

const openModal = function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  name.focus();
};

modalOpenBtn.addEventListener("click", openModal);

modalCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      // modal.classList.remove("modal-error");
    }
  }
});

// map

const hideMarker = () => {
  document.querySelector('.map-marker').style.display = 'none';
};
