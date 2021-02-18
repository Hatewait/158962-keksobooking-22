import {getSimilarOffers} from './data-create.js';
import {drawOfferCard} from './popup.js';
import {getPrice, syncTimeHandler} from './form.js';


const TOTAL_OBJECTS_AMOUNT = 10;

const offerCards = getSimilarOffers(TOTAL_OBJECTS_AMOUNT);
drawOfferCard(offerCards[0]);
syncTimeHandler();
getPrice();
