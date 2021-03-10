import {disableForm, enableForm} from './form.js';
import {drawOfferCard} from './popup.js';
import {filterOffers} from './filter.js';

const TOTAL_OFFERS_AMOUNT = 10;
const MAIN_PIN_LAT = 35.6895;
const MAIN_PIN_LNG = 139.69171;
const MAIN_PIN_WIDTH = 50;
const MAIN_PIN_HEIGHT = 50;
const MAIN_PIN_ANCHOR_WIDTH = 25;
const MAIN_PIN_ANCHOR_HEIGHT = 50;
const PIN_WIDTH = 40;
const PIN_HEIGHT = 40;
const PIN_ANCHOR_WIDTH = 20;
const PIN_ANCHOR_HEIGHT = 40;
const addressField = document.querySelector('#address');

export function setMainPinToDefault() {
  MAP.setView(new LEAFLET_OBJECT.LatLng(MAIN_PIN_LAT, MAIN_PIN_LNG))
  mainPinMarker.setLatLng(new LEAFLET_OBJECT.LatLng(MAIN_PIN_LAT, MAIN_PIN_LNG))
}

disableForm();
const LEAFLET_OBJECT = window.L;
const MAP = LEAFLET_OBJECT.map('map-canvas')
  .on('load', function () {
    enableForm();
    addressField.setAttribute('readonly', 'readonly')
    addressField.value = `${MAIN_PIN_LAT.toString()}, ${MAIN_PIN_LNG.toString()}`;
  })
  .setView({
    lat: MAIN_PIN_LAT,
    lng: MAIN_PIN_LNG,
  }, 13);

LEAFLET_OBJECT.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(MAP);

const mainPinIcon = LEAFLET_OBJECT.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_HEIGHT],
  iconAnchor: [MAIN_PIN_ANCHOR_WIDTH, MAIN_PIN_ANCHOR_HEIGHT],
});

const mainPinMarker = LEAFLET_OBJECT.marker(
  {
    lat: MAIN_PIN_LAT,
    lng: MAIN_PIN_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(MAP);

mainPinMarker.on('move', function (evt) {
  const coordinates = evt.target.getLatLng();
  const int = 5;
  addressField.value = `${coordinates.lat.toFixed(int)}, ${coordinates.lng.toFixed(int)}`;

});

const adLayer = LEAFLET_OBJECT.layerGroup().addTo(MAP);

export function createAdds(data) {
  adLayer.clearLayers();
  filterOffers(data)
    .slice(0, TOTAL_OFFERS_AMOUNT)
    .forEach(function (element) {
      const icon = LEAFLET_OBJECT.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [PIN_WIDTH, PIN_HEIGHT],
        iconAnchor: [PIN_ANCHOR_WIDTH, PIN_ANCHOR_HEIGHT],
      });

      const marker = LEAFLET_OBJECT.marker(
        {
          lat: element.location.lat,
          lng: element.location.lng,
        },
        {
          icon,
        },
      );

      marker
        .addTo(adLayer)
        .bindPopup(
          drawOfferCard(element),
        );
    });

}

