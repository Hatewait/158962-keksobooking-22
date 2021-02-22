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
