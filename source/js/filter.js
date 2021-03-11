import {mapFiltersContainer} from './validation.js';

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const accommodationType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

function getPriceFilter(data) {
  switch (housingPrice.value) {
    case 'low':
      return data.offer.price < LOW_PRICE;
    case 'middle':
      return data.offer.price >= LOW_PRICE && data.offer.price < HIGH_PRICE;
    case 'high':
      return data.offer.price >= HIGH_PRICE;
    case 'any':
      return data;
  }
}

function getAccommodationFilter(data) {
  switch (accommodationType.value) {
    case 'palace':
      return data.offer.type === 'palace';
    case 'flat':
      return data.offer.type === 'flat'
    case 'house':
      return data.offer.type === 'house';
    case 'bungalow':
      return data.offer.type === 'bungalow';
    case 'any':
      return data;
  }
}

function getFeaturesFilter(data) {
  const isCheckedFeatures = Array.from(housingFeatures.querySelectorAll('input:checked'));

  return isCheckedFeatures.every(function (input) {
    return data.offer.features.includes(input.value);
  })
}
function getHousingTypeData(data) {
  return housingRooms.value === 'any' || +housingRooms.value === data.offer.rooms;
}

function getGuestData(data) {
  return housingGuests.value === 'any' || +housingGuests.value === data.offer.guests;
}


function getFilteredData(data) {
  const rooms = getHousingTypeData(data);
  const guests = getGuestData(data);
  const type = getAccommodationFilter(data);
  const price = getPriceFilter(data);
  const features = getFeaturesFilter(data);

  return type && price && rooms && guests && features;
}

export function filterOffers(data) {
  return data.filter(getFilteredData);
}

export function updateFilteredData(cb) {
  mapFiltersContainer.addEventListener('change', function () {
    cb();
  });
}



