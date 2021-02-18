const adForm = document.querySelector('.ad-form');
const housingType = adForm.querySelector('#type');
const adFormTime = document.querySelector('.ad-form__element--time');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const price = adForm.querySelector('#price');

const DEFAULT_PRICE = 1000;

price.placeholder = DEFAULT_PRICE;
price.setAttribute('min', price.placeholder)

const HOUSING_TYPE_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

export function syncTimeHandler() {
  adFormTime.addEventListener('change', function (evt) {
    const optionValue = evt.target.value;
    timeOut.value = optionValue;
    timeIn.value = optionValue;
  });
}

export function getPrice() {
  housingType.addEventListener('change', function (evt) {
    const optionValue = evt.target.value;
    price.placeholder = HOUSING_TYPE_PRICES[optionValue];
    price.setAttribute('min', HOUSING_TYPE_PRICES[optionValue])
  });
}



