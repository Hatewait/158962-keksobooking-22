import {sendDataToServer} from './backend-data.js';
import {setMainPinToDefault} from './map.js';

const adTitle = document.querySelector('#title');
const roomNumberContainer = document.querySelector('#room_number');
const capacityContainer = document.querySelector('#capacity');
const capacityOptions = capacityContainer.querySelectorAll('option');
const resetButton = document.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');
export const mapFiltersContainer = document.querySelector('.map__filters');

function checkTitleValidity() {
  if (adTitle.validity.tooShort) {
    adTitle.setCustomValidity('Заголовок объявления должен состоять минимум из 30 символов');
  } else if (adTitle.validity.tooLong) {
    adTitle.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
  } else if (adTitle.validity.valueMissing) {
    adTitle.setCustomValidity('Пожалуйста, введите заголовок');
  } else {
    adTitle.setCustomValidity('');
  }

  adTitle.reportValidity();
}

function checkRoomsAndCapacityValidity() {
  if (roomNumberContainer.value === '100' && capacityContainer.value !== '0') {
    roomNumberContainer.setCustomValidity('Только не для гостей');
  } else if (capacityContainer.value === '0' && roomNumberContainer.value !== '100') {
    capacityContainer.setCustomValidity('Для выбора данной опции необходимо 100 комнат');
  } else if (roomNumberContainer.value < capacityContainer.value && capacityContainer.value !== '0') {
    roomNumberContainer.setCustomValidity('Количество людей больше, чем мест. Выберете большее количество комнат');
    capacityContainer.setCustomValidity('Количество людей больше, чем мест. Выберете большее количество комнат');
  } else {
    roomNumberContainer.setCustomValidity('');
    capacityContainer.setCustomValidity('');
  }

  capacityContainer.reportValidity();
}

function setDisabledForCapacityOptions() {
  capacityOptions.forEach(function (element) {
    element.disabled = element.value > roomNumberContainer.value || element.value === '0' && roomNumberContainer.value !== '100'
      || element.value !== '0' && roomNumberContainer.value === '100';
  })
}

function onCapacityContainerChange() {
  checkRoomsAndCapacityValidity();
}

function onRoomNumberContainerChange() {
  checkRoomsAndCapacityValidity();
  setDisabledForCapacityOptions()
}

function onAdTitleInput() {
  checkTitleValidity();
}

export function validateForm() {
  adTitle.addEventListener('input', onAdTitleInput);
  roomNumberContainer.addEventListener('change', onRoomNumberContainerChange);
  capacityContainer.addEventListener('change', onCapacityContainerChange);
}

function onResetButtonClick(evt) {
  evt.preventDefault();
  adForm.reset();
  mapFiltersContainer.reset();
  setMainPinToDefault();
}

function onAdFormSubmit(evt) {
  evt.preventDefault();
  sendDataToServer(evt);
  adForm.reset();
  mapFiltersContainer.reset();
  setMainPinToDefault();
}

resetButton.addEventListener('click', onResetButtonClick);
adForm.addEventListener('submit', onAdFormSubmit);
