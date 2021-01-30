'use strict'

// функция генерации случайного целого числа
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max <= min) {
    return 'ошибка'
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(1.3, 1.9)

// функция генерации случайного дробного числа
function getRandomFloatNumber(min, max, int) {
  if (min < 0 || max <= min) {
    return 'ошибка'
  }

  let result = (Math.random() * (max - min)) + min;
  result = result.toFixed(int);

  return result;
}

getRandomFloatNumber(1.1, 1.9, 2)

