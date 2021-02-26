const ALERT_SHOW_TIME = 5000;

// функция генерации случайного целого числа
export function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max <= min) {

    return null
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция генерации случайного дробного числа
export function getRandomFloatNumber(min, max, integer) {
  if (min < 0 || max <= min) {

    return null
  }

  return Number((Math.random() * (max - min)) + min).toFixed(integer);
}

// функция генерации случайного 'элемента' массива (https://expange.ru/e/Случайный_элемент_массива_(JavaScript))
export function getRandomElement(elements) {
  const randomIndex = getRandomNumber(0, elements.length - 1);

  return elements[randomIndex];
}

export function shuffleArray(elements){
  const clonedElements = elements.slice();

  for(let i = clonedElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = clonedElements[j];
    clonedElements[j] = clonedElements[i];
    clonedElements[i] = temp;
  }

  return clonedElements;
}

// функция, которая генерирует случайную длину массива
export function getRandomArrayLength(elements) {
  const randomIndex = getRandomNumber(1, elements.length); // генерирую случайное число на которое будет отрезаться массив

  return shuffleArray(elements).slice(0, randomIndex);
}

export function setAttributeDisabled (elements) {
  elements.forEach(function (element) {
    element.setAttribute('disabled', 'disabled');
  })
}

export function removeAttributeDisabled (elements) {
  elements.forEach(function (element) {
    element.removeAttribute('disabled', 'disabled');
  })
}

export function isEsc(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}
