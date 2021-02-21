import {enableForm} from './form.js';
import {drawOfferCard} from './popup.js';
import {offerCards} from './main.js';

const MAIN_PIN_LAT = 35.6895;
const MAIN_PIN_LNG = 139.69171;
const MAIN_PIN_WIDTH = 40;
const MAIN_PIN_HEIGHT = 40;
const MAIN_PIN_ANCHOR_WIDTH = 20;
const MAIN_PIN_ANCHOR_HEIGHT = 40;
const PIN_WIDTH = 30;
const PIN_HEIGHT = 30;
const PIN_ANCHOR_WIDTH = 15;
const PIN_ANCHOR_HEIGHT = 30;
const addressField = document.querySelector('#address')

export function createMap() {
  const LEAFLET_OBJECT = window.L;
  const MAP = LEAFLET_OBJECT.map('map-canvas')
    .on('load', () => {
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

  mainPinMarker.on('move', (evt) => {
    const coordinates = evt.target.getLatLng();
    const int = 5;
    addressField.value = `${coordinates.lat.toFixed(int)}, ${coordinates.lng.toFixed(int)}`;

  });

  offerCards.forEach((element) => {
    const icon = LEAFLET_OBJECT.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [PIN_WIDTH, PIN_HEIGHT],
      iconAnchor: [PIN_ANCHOR_WIDTH, PIN_ANCHOR_HEIGHT],
    });

    const marker = LEAFLET_OBJECT.marker(
      {
        lat: element.location.x,
        lng: element.location.y,
      },
      {
        icon,
      },
    );

    marker
      .addTo(MAP)
      .bindPopup(
        drawOfferCard(element),
      );
  });
}

