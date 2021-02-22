function getTypeOfHousing(type) {
  switch (type) {
    case 'flat':
      return 'Квартира'

    case 'bungalow':
      return 'Бунгало'

    case 'house':
      return 'Дом'

    case 'palace':
      return 'Дворец'
  }
}

// функция для отрисовки типовой карточки на основе шаблона
export function drawOfferCard(similarOfferItem) {
  const similarOfferTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const similarElement = similarOfferTemplate.cloneNode(true);

  similarElement.querySelector('.popup__title').textContent = similarOfferItem.offer.title;
  similarElement.querySelector('.popup__text--address').textContent = similarOfferItem.offer.address;
  similarElement.querySelector('.popup__text--price').textContent = `${similarOfferItem.offer.price} ₽/ночь`;
  similarElement.querySelector('.popup__type').textContent = getTypeOfHousing(similarOfferItem.offer.type);
  similarElement.querySelector('.popup__text--time').textContent = `${similarOfferItem.offer.rooms} комнаты для ${similarOfferItem.offer.guests} гостей`;
  similarElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOfferItem.offer.checkin}, выезд до ${similarOfferItem.offer.checkout}`;
  similarElement.querySelector('.popup__features').textContent = '';
  similarElement.querySelector('.popup__description').textContent = similarOfferItem.offer.description;
  similarElement.querySelector('.popup__photos').textContent = '';
  similarElement.querySelector('.popup__avatar').src = similarOfferItem.author.avatar;

  const imagesContainer = similarElement.querySelector('.popup__photos');

  similarOfferItem.offer.photos.forEach(function (element) {
    const newElement = document.createElement('img');
    newElement.classList.add('popup__photo');
    newElement.alt = 'Фотография жилья';
    newElement.width = 45;
    newElement.height = 45;
    imagesContainer.appendChild(newElement);
    newElement.src = element;
  })

  const featureList = similarElement.querySelector('.popup__features');
  similarOfferItem.offer.features.forEach(function (element) {
    const newElement = document.createElement('li');
    featureList.appendChild(newElement);
    newElement.classList.add('popup__feature', 'popup__feature--' + element);
  })

  return similarElement;
}



