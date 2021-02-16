import {getSimilarOffers} from './data-create.js';
import {drawOfferCard} from './popup.js';

const TOTAL_OBJECTS_AMOUNT = 10;
const offerCards = getSimilarOffers(10);
const similarOffersContainer = document.querySelector('.map__canvas');

getSimilarOffers(TOTAL_OBJECTS_AMOUNT);

similarOffersContainer.appendChild(drawOfferCard(offerCards[0]));
