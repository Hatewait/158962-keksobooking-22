'use strict'

const TOTAL_OBJECTS_AMOUNT = 10;
const MIN_GUESTS_AMOUNT = 1;
const MAX_GUESTS_AMOUNT = 5;
const MIN_ROOMS_AMOUNT = 1;
const MAX_ROOMS_AMOUNT = 4;
const MIN_COORDINATE_X = 35.65000;
const MAX_COORDINATE_X = 35.70000;
const MIN_COORDINATE_Y = 139.70000;
const MAX_COORDINATE_Y = 139.80000;
const MIN_AVATAR_SRC_NUMBER = 1;
const MAX_AVATAR_SRC_NUMBER = 8;
const offerPrices= [3000, 5000, 15000, 25000, 50000];
const offerHousingTypes = ['palace', 'flat', 'house', 'bungalow'];
const offerTitles = ['Уютное местечко', 'Райский уголок', 'Гнездо для двоих', 'Рай в шалаше' , 'Жуткое место' , 'Отправь сюда врага'];
const offerDescriptions = ['Это лучшее место на свете', 'Проведи свой отпуск у нас', 'Уноси скорее ноги, пока не поздно', 'Это лучшее, что ты видел', 'У нас самое лучший отдых'];
const offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkinTimes = ['12:00', '13:00', '14:00'];
const checkoutTimes = ['12:00', '13:00', '14:00'];
const offerPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// функция генерации случайного целого числа
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max <= min) {
    return null
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция генерации случайного дробного числа
function getRandomFloatNumber(min, max, int) {
  if (min < 0 || max <= min) {
    return null
  }

  let result = (Math.random() * (max - min)) + min;
  result = Number(result.toFixed(int));

  return result;
}

// функция генерации случайного элемента массива (https://expange.ru/e/Случайный_элемент_массива_(JavaScript))
function getRandomElement(arr) {
  const rand = getRandomNumber(0, arr.length - 1);
  return arr[rand];
}

function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

// функция, которая генерирует случайную длину массива
function getRandomArrayLength(arr) {
  arr = shuffleArray(arr) // превращаю исходный массив в перемешанный
  let newArr = []; // создаю пустой массив куда буду складывать элементы
  const randNum = getRandomNumber(1, arr.length); // генерирую случайное число на которое будет отрезаться массив
  newArr = arr.slice(0, randNum) // кладу в пустой массив преобразованный массив
  return newArr;
}

// функция для генерации объектов с похожими предложениями
function getSimilarOffers(amount) {
  const newArr = [];

  for (let i = 0; i < amount; i++) {

    const coordinateX = getRandomFloatNumber(MIN_COORDINATE_X, MAX_COORDINATE_X, 5);
    const coordinateY = getRandomFloatNumber(MIN_COORDINATE_Y, MAX_COORDINATE_Y, 5);

    newArr.push(
      {
        author: {
          avatar: 'img/avatars/user0' + getRandomNumber(MIN_AVATAR_SRC_NUMBER, MAX_AVATAR_SRC_NUMBER) + '.png',

        },
        offer: {
          title: getRandomElement(offerTitles),
          address: coordinateX + ', ' + coordinateY,
          price: getRandomElement(offerPrices),
          type: getRandomElement(offerHousingTypes),
          rooms: getRandomNumber(MIN_ROOMS_AMOUNT, MAX_ROOMS_AMOUNT),
          guests: getRandomNumber(MIN_GUESTS_AMOUNT, MAX_GUESTS_AMOUNT),
          checkin: getRandomElement(checkinTimes),
          checkout: getRandomElement(checkoutTimes),
          description: getRandomElement(offerDescriptions),
          features: getRandomArrayLength(offerFeatures),
          photos: getRandomArrayLength(offerPhotos),
        },

        location: {
          x: coordinateX,
          y: coordinateY,
        },

      },
    )
  }
  return newArr;
}

getSimilarOffers(TOTAL_OBJECTS_AMOUNT);
// console.log(getSimilarOffers(TOTAL_OBJECTS_AMOUNT));
