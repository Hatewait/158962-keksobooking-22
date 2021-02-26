import {setAttributeDisabled, removeAttributeDisabled} from './util.js';
import {isEsc} from './util.js';
import {getDefaultCoordinates, createMap} from './map.js';

const HOUSING_TYPE_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}
const DEFAULT_PRICE = 1000;

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFiltersContainer = document.querySelector('.map__filters');
const mapFiltersElements = mapFiltersContainer.querySelectorAll('select')
const mapFeatures = mapFiltersContainer.querySelector('.map__features');
const housingType = adForm.querySelector('#type');
const adFormTime = document.querySelector('.ad-form__element--time');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const price = adForm.querySelector('#price');

export function disableForm() {
  adForm.classList.add('ad-form--disabled');
  mapFeatures.setAttribute('disabled', 'disabled');

  setAttributeDisabled(adFormFieldsets);
  setAttributeDisabled(mapFiltersElements);
}

export function enableForm() {
  price.placeholder = DEFAULT_PRICE;
  price.setAttribute('min', price.placeholder);
  adForm.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');

  removeAttributeDisabled(adFormFieldsets)
  removeAttributeDisabled(mapFiltersElements)
}

function onHousingTypeChange(evt) {
  const optionValue = evt.target.value;
  price.placeholder = HOUSING_TYPE_PRICES[optionValue];
  price.setAttribute('min', HOUSING_TYPE_PRICES[optionValue])
}

function onAdFormTimeChange(evt) {
  const optionValue = evt.target.value;
  timeOut.value = optionValue;
  timeIn.value = optionValue;
}

export function syncTime() {
  adFormTime.addEventListener('change', onAdFormTimeChange)
}

export function getPrice() {
  housingType.addEventListener('change', onHousingTypeChange)
}

// create success message
const resetButtonSuccess = document.querySelector('.ad-form__reset');
const tagMain = document.querySelector('main');
const templateFormSuccess = document.querySelector('#success')
  .content
  .querySelector('div');

function setSuccessMessage() {
  const cardElement = templateFormSuccess.cloneNode(true);
  tagMain.append(cardElement);

  document.addEventListener('keydown', function () {
    if (isEsc) {
      cardElement.remove();
    }
  });

  document.addEventListener('click', function () {
    cardElement.remove();
  });

  adForm.reset();
  mapFiltersContainer.reset();
  getDefaultCoordinates();
}

resetButtonSuccess.addEventListener('click', function () {
  getDefaultCoordinates();
});

// create error message
const templateFormError = document.querySelector('#error')
  .content
  .querySelector('div');

function setErrorMessage() {
  const cardElement = templateFormError.cloneNode(true);
  tagMain.append(cardElement);

  document.addEventListener('keydown', function () {
    if (isEsc) {
      cardElement.remove();
    }
  });

  document.addEventListener('click', function () {
    cardElement.remove();
  });
}



export function setUserFormSubmit() {
  adForm.addEventListener('submit', onAddFormFilling)
}


function onAddFormFilling(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  ).then(function () {
    setSuccessMessage();
  })
    .catch(function () {
      setErrorMessage();
    });
}
