import {getSimilarOffers} from './data-create.js';
import {disableForm} from './form.js';
import {createMap} from './map.js';

const TOTAL_OBJECTS_AMOUNT = 10;
export const offerCards = getSimilarOffers(TOTAL_OBJECTS_AMOUNT);
getSimilarOffers(TOTAL_OBJECTS_AMOUNT);

disableForm();
createMap();

