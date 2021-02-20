import {enableForm} from './form.js';
import {getSimilarOffers} from './data-create.js';
import {drawOfferCard} from './popup.js';

const addressField = document.querySelector('#address')
const TOKIO_CENTER_LAT = 35.6895;
const TOKIO_CENTER_LNG = 139.69171;

export function createMap() {
  const LEAFLET_OBJECT = window.L;
  const MAP = LEAFLET_OBJECT.map('map-canvas')
    .on('load', () => {
      enableForm();
      addressField.setAttribute('readonly', 'readonly')
      addressField.value = `${TOKIO_CENTER_LAT.toString()}, ${TOKIO_CENTER_LNG.toString()}`;
    })
    .setView({
      lat: TOKIO_CENTER_LAT,
      lng: TOKIO_CENTER_LNG,
    }, 13);

  LEAFLET_OBJECT.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);

  const mainPinIcon = LEAFLET_OBJECT.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const mainPinMarker = LEAFLET_OBJECT.marker(
    {
      lat: TOKIO_CENTER_LAT,
      lng: TOKIO_CENTER_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(MAP);

  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    const int = 5;
    addressField.value = `${coordinates.lat.toFixed(int)}, ${coordinates.lng.toFixed(int)}`;

  });

  const TOTAL_OBJECTS_AMOUNT = 10;
  const offerCards = getSimilarOffers(TOTAL_OBJECTS_AMOUNT);

  offerCards.forEach((element) => {
    const icon = LEAFLET_OBJECT.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
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

