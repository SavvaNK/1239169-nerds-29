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

const modalOpenBtn = document.querySelector(".map-contacts-button");
const modalCloseBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const form = modal.querySelector(".modal-form");
const name = modal.querySelector("[name=name]");
const email = modal.querySelector("[name=email]");
const text = modal.querySelector("[name=text]");

modalOpenBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  name.focus();
});

const closeModal = () => {
  modal.classList.add("modal-close-animation");
  setTimeout(function() {
    modal.classList.remove("modal-show", "modal-close-animation");
    name.classList.remove("modal-form-input-invalid");
    email.classList.remove("modal-form-input-invalid");
    text.classList.remove("modal-form-input-invalid");
  }, 500);
}

modalCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      closeModal();
    }
  }
});

const containsEmptyValue = function() {
  if (!this.value) {
    this.classList.add("modal-form-input-invalid");
  }
};

const removeInvalidClass = function() {
  if (this.classList.contains("modal-form-input-invalid")) {
    this.classList.remove("modal-form-input-invalid");
  }
};

name.onblur = containsEmptyValue;
name.onfocus = removeInvalidClass;

email.onblur = function() {
  if (!this.value.includes("@")) {
    this.classList.add("modal-form-input-invalid");
  }
};
email.onfocus = removeInvalidClass;

text.onblur = containsEmptyValue;
text.onfocus = removeInvalidClass;

// silliest form validation, but whatever, I just want to shake modal XD
const isFormValid = () => (
    name.value
    && email.value.includes("@")
    && text.value
);

form.addEventListener("submit", function (evt) {
  if (!isFormValid()) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    // modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
});

// map

const hideMarker = () => {
  document.querySelector('.map-marker').style.display = 'none';
};
