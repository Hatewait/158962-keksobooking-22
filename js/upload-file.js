const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const accommodationFileChooser = document.querySelector('.ad-form__input');
const avatarFileChooser = document.querySelector('.ad-form-header__input');
const accommodationPhotoContainer = document.querySelector('.ad-form__photo');
const accommodationPhoto = document.createElement('img');
accommodationPhoto.style.maxWidth = '100%';
accommodationPhoto.style.height = '70px';
accommodationPhotoContainer.appendChild(accommodationPhoto);
const userAvatar = document.querySelector('.ad-form-header__preview img');
const housingAvatar = document.querySelector('.ad-form__photo img')

function prepareFileToUpload(fileInput, img) {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      img.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

function onFileChooserChange() {
  prepareFileToUpload(avatarFileChooser, userAvatar)
}

export function uploadAvatarPhoto() {
  avatarFileChooser.addEventListener('change', onFileChooserChange);
}

function onAccommodationFileChooserChange() {
  prepareFileToUpload(accommodationFileChooser, housingAvatar);
}

export function uploadAccommodationPhoto() {
  accommodationFileChooser.addEventListener('change', onAccommodationFileChooserChange);
}
