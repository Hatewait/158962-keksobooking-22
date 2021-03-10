/* global _:readonly */
import {createAdds} from './map.js';
import {getPrice, syncTime} from './form.js';
import {validateForm} from './validation.js';
import {getDataFromServer} from './backend-data.js';
import {updateFilteredData} from './filter.js';
import {uploadAvatarPhoto, uploadAccommodationPhoto} from './upload-file.js';

const RERENDER_DELAY = 500;

syncTime();
getPrice();
validateForm();
uploadAvatarPhoto();
uploadAccommodationPhoto();

getDataFromServer(function (data) {
  createAdds(data);
  updateFilteredData(_.debounce(function() {
    createAdds(data)
  }, RERENDER_DELAY))
})

