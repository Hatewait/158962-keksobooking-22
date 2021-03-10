import {showAlert} from './util.js';
import {setSuccessMessage, setErrorMessage} from './util.js';

export function getDataFromServer(onSuccess) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Данные не пришли с сервера');
      }
    })
    .then(function (data) {
      onSuccess(data);
    })
    .catch(function () {
      showAlert('Данные не пришли с сервера');
    });
}


export function sendDataToServer(evt) {
  const formData = new FormData(evt.target);
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  ).then(function (response) {
    if (response.ok) {
      setSuccessMessage();
    } else {
      setErrorMessage();
    }
  }).catch(function () {
    setErrorMessage();
  });
}
