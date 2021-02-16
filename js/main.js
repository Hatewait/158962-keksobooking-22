import {getSimilarOffers} from './data-create.js';
import {drawOfferCard} from './popup.js';

const TOTAL_OBJECTS_AMOUNT = 10;
getSimilarOffers(TOTAL_OBJECTS_AMOUNT);

const offerCards = getSimilarOffers(10);
drawOfferCard(offerCards[0]);
