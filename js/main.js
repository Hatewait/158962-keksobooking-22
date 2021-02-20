import {getSimilarOffers} from './data-create.js';
import {getPrice, syncTimeHandler} from './form.js';
import {disableForm} from './form.js';
import {createMap} from './map.js';

const TOTAL_OBJECTS_AMOUNT = 10;
getSimilarOffers(TOTAL_OBJECTS_AMOUNT);

syncTimeHandler();
getPrice();
disableForm();
createMap();
