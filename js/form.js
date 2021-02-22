import {onAdTitleInput, onCapacityContainerChange, onRoomNumberContainerChange} from './validation.js';
import {setAttributeDisabled, removeAttributeDisabled} from './util.js';

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
  onCapacityContainerChange();
  onRoomNumberContainerChange();
  onAdTitleInput();
  syncTimeHandler();
  getPrice();
}

function syncTimeHandler() {
  adFormTime.addEventListener('change', function (evt) {
    const optionValue = evt.target.value;
    timeOut.value = optionValue;
    timeIn.value = optionValue;
  });
}

function getPrice() {
  housingType.addEventListener('change', function (evt) {
    const optionValue = evt.target.value;
    price.placeholder = HOUSING_TYPE_PRICES[optionValue];
    price.setAttribute('min', HOUSING_TYPE_PRICES[optionValue])
  });
}

