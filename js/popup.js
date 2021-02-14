import {getSimilarOffers} from './data-create.js';
import {offerFeatures} from './data-create.js';

const similarOffersContainer = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const fragment = document.createDocumentFragment();

function getTypeOfHousing(item) {
  let type = item.offer.type;

  switch (type) {
    case 'flat':
      type = 'Квартира'
      break;

    case 'bungalow':
      type = 'Бунгало'
      break;

    case 'house':
      type = 'Дом'
      break;

    case 'palace':
      type = 'Дворец'
      break;
  }

  return type;
}

// функция для отрисовки типовой карточки на основе шаблона
function drawOfferCard(similarOfferItem) {
  const similarElement = similarOfferTemplate.cloneNode(true); // клонируем полностью всю разметку из шаблона

  // в блоке, который склонировали ищем элементы по класса и перезаписываем их на свои параметры из переданного сгенерированного объекта
  similarElement.querySelector('.popup__title').textContent = similarOfferItem.offer.title;
  similarElement.querySelector('.popup__text--address').textContent = similarOfferItem.offer.address;
  similarElement.querySelector('.popup__text--price').textContent = `${similarOfferItem.offer.price} ₽/ночь`;
  similarElement.querySelector('.popup__type').textContent = getTypeOfHousing(similarOfferItem);
  similarElement.querySelector('.popup__text--capacity').textContent = `${similarOfferItem.offer.rooms} комнаты для ${similarOfferItem.offer.guests} гостей`;
  similarElement.querySelector('.popup__text--capacity').textContent = `Заезд после ${similarOfferItem.offer.checkin} выезд до ${similarOfferItem.offer.checkout}`;
  similarElement.querySelector('.popup__features').textContent = '';
  similarElement.querySelector('.popup__description').textContent = similarOfferItem.offer.description;
  similarElement.querySelector('.popup__photos').textContent = '';
  similarElement.querySelector('.popup__avatar').src = similarOfferItem.author.avatar;


  // В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как src соответствующего изображения.
  for (let i = 0; i < similarOfferItem.offer.photos.length; i++) {
    const imagesContainer = similarElement.querySelector('.popup__photos');
    const imageItem = document.createElement('img');
    imageItem.classList.add('popup__photo');
    imageItem.alt = 'Фотография жилья';
    imageItem.width = 45;
    imageItem.height = 45;
    imagesContainer.appendChild(imageItem);
    imageItem.src = similarOfferItem.offer.photos[i];
  }

  // В список .popup__features выведите все доступные удобства в объявлении.
  for (let i = 0; i < offerFeatures.length; i++) {
    const featureList = similarElement.querySelector('.popup__features');
    const featureItem = document.createElement('li');
    featureList.appendChild(featureItem);
    featureItem.classList.add('popup__feature', 'popup__feature--' + offerFeatures[i]);
  }

  /*const similarOfferTemplateChildren = similarElement.children;
  for (let i = 0; i < similarOfferTemplateChildren.length; i++) {
    if (similarOfferTemplateChildren[i].textContent  === '') {
      console.log(similarOfferTemplateChildren[i])
      similarOfferTemplateChildren[i].remove();
    }
  }*/

  return similarElement;
}

const offerCards = getSimilarOffers(10);
fragment.appendChild(drawOfferCard(offerCards[0]));
similarOffersContainer.appendChild(fragment);

// функция для отрисовки карточек объявлений

/*function drawAllOfferCards(elements) {

  for (let i = 0; i < elements.length; i++) {
    fragment.appendChild(drawOfferCard(elements[i]));
  }

  return similarOffersContainer.appendChild(fragment);
}

drawAllOfferCards(getSimilarOffers([1]))*/

