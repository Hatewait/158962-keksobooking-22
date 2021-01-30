'use strict'

// функция генерации случайного целого числа
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return 'Числа должны быть положительные'
  }

  if (max <= min) {
    return 'Число для максимального значения не должно быть меньше или равно минимальному'
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(1,9)

// функция генерации случайного дробного числа
function getRandomFloatNumber(min, max, int) {
  if (min < 0) {
    return 'Числа должны быть положительные'
  }

  if (max <= min) {
    return 'Число для максимального значения не должно быть меньше или равно минимальному'
  }

  let result = (Math.random() * (max - min)) + min;
  result = result.toFixed(int);

  return result;
}

getRandomFloatNumber(1.1, 1.9, 2)

