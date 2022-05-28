'use strict';

const btnSubmit = document.querySelector('.btn-submit-rating');
const ratingState = document.querySelector('#rating');
const thankYouState = document.querySelector('#thank-you');
const selectedRating = document.querySelector('.selected-rating');
const ratingButtons = [...document.querySelectorAll('input[type="radio"]')];

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  ratingButtons.forEach((button, i) => {
    button.checked == true
      ? (selectedRating.innerHTML = ` ${button.id[0]} `)
      : '';
  });
  ratingState.classList.add('rating-transition');
  thankYouState.classList.add('thank-you-transition');
});
