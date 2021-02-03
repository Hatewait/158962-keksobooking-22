'use strict'

const totalObjects = 10;
const minGuestAmount = 1;
const maxGuestAmount = 5;
const minRoomsAmount = 1;
const maxRoomsAmount = 4;
const priceArr= [3000, 5000, 15000, 25000, 50000];
const avatarNum = ['01', '02', '03', '04', '05', '06', '07', '08']
const housingTypeArr = ['palace', 'flat', 'house', 'bungalow'];
const offerTitleArr = ['Уютное местечко', 'Райский уголок', 'Гнездо для двоих', 'Рай в шалаше'];
const offerDescription = ['Это лучшее место на свете', 'Проведи свой отпуск у нас', 'Уноси скорее ноги, пока не поздно'];
const checkinArr = ['12:00', '13:00', '14:00'];
const checkoutArr = ['12:00', '13:00', '14:00'];
const featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const minCoordinateX = 35.65000;
const maxCoordinateX = 35.70000;
const mixCoordinateY = 139.70000;
const maxCoordinateY = 139.80000;


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
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

// генерируем строку из случайных координат
function getRandomCoordinates() {
  return getRandomFloatNumber(minCoordinateX, maxCoordinateX, 5).toString()
    + ', '
    + getRandomFloatNumber(mixCoordinateY, maxCoordinateY, 5).toString()
}

// функция, которая генерирует случайную длину массива с features
function getRandomFeaturesArr(arr) {
  let newArr = [];
  let rand = Math.floor(Math.random() * arr.length + 1);
  newArr.push(arr.slice(0, rand))
  return newArr;
}

// функция для генерации объектов
function generatedObjects(amount) {
  let newArr = [];

  for (let i = 0; i < amount; i++) {
    newArr.push(
      {
        author: {
          avatar: 'img/avatars/user' + getRandomElement(avatarNum) + '.png',

        },
        offer: {
          title: getRandomElement(offerTitleArr),
          address: getRandomCoordinates(),
          price: getRandomElement(priceArr),
          type: getRandomElement(housingTypeArr),
          rooms: getRandomNumber(minRoomsAmount, maxRoomsAmount),
          guests: getRandomNumber(minGuestAmount, maxGuestAmount),
          checkin: getRandomElement(checkinArr),
          checkout: getRandomElement(checkoutArr),
          description: getRandomElement(offerDescription),
          features: getRandomFeaturesArr(featuresArr),
          photos: getRandomElement(photosArr),
        },

        location: {
          x: getRandomFloatNumber(minCoordinateX, maxCoordinateX, 5),
          y: getRandomFloatNumber(mixCoordinateY, maxCoordinateY, 5),
        },

      },
    )
  }
  return newArr;
}

generatedObjects(totalObjects);
// console.log(generatedObjects(totalObjects));
