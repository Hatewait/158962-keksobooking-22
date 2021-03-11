const ALERT_SHOW_TIME = 5000;

export function setAttributeDisabled(elements) {
  elements.forEach(function (element) {
    element.setAttribute('disabled', 'disabled');
  })
}

export function removeAttributeDisabled(elements) {
  elements.forEach(function (element) {
    element.removeAttribute('disabled', 'disabled');
  })
}

export function isEsc(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

export function showAlert(message)  {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(function () {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const tagMain = document.querySelector('main');

export function setSuccessMessage() {
  const templateFormSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  const cardElement = templateFormSuccess.cloneNode(true);
  tagMain.append(cardElement);

  document.addEventListener('keydown', function () {
    if (isEsc) {
      cardElement.remove();
    }
  });

  document.addEventListener('click', function () {
    cardElement.remove();
  });
}

export function setErrorMessage() {
  const templateFormError = document.querySelector('#error')
    .content
    .querySelector('.error');

  const cardElement = templateFormError.cloneNode(true);
  tagMain.append(cardElement);

  document.addEventListener('keydown', function () {
    if (isEsc) {
      cardElement.remove();
    }
  });

  document.addEventListener('click', function () {
    cardElement.remove();
  });
}
