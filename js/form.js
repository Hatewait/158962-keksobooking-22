const AD_FORM_FIELD = document.querySelector('.ad-form__element--time');
const AD_FORM = document.querySelector('.ad-form');
const TIME_IN = AD_FORM.querySelector('#timein');
const TIME_OUT = AD_FORM.querySelector('#timeout');
const PRICE = AD_FORM.querySelector('#price');
const DEFAULT_PRICE = 1000;

PRICE.placeholder = DEFAULT_PRICE;
PRICE.setAttribute('min', PRICE.placeholder)


const HOUSING_TYPE_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

export function getPrice() {
  AD_FORM.addEventListener('change', function (evt) {
    switch (evt.target.value) {
      case 'bungalow':
        PRICE.placeholder = HOUSING_TYPE_PRICES.bungalow;
        PRICE.setAttribute('min', HOUSING_TYPE_PRICES.bungalow)
        break;

      case 'flat':
        PRICE.placeholder = HOUSING_TYPE_PRICES.flat;
        PRICE.setAttribute('min', HOUSING_TYPE_PRICES.flat)
        break;

      case 'house':
        PRICE.placeholder = HOUSING_TYPE_PRICES.house;
        PRICE.setAttribute('min', HOUSING_TYPE_PRICES.house)
        break;

      case 'palace':
        PRICE.placeholder = HOUSING_TYPE_PRICES.palace;
        PRICE.setAttribute('min', HOUSING_TYPE_PRICES.palace)
    }
  });
}

export function syncTimeHandler() {
  AD_FORM_FIELD.addEventListener('change', function (evt) {
    TIME_OUT.value = evt.target.value
    TIME_IN.value = evt.target.value;
  });
}


