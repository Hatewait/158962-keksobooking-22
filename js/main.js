import {createAdds} from './map.js';
import {getPrice, syncTime} from './form.js';
import {validateForm} from './validation.js';
import {getDataFromServer} from './backend-data.js';
import {onFilterChange} from './filter.js';

syncTime();
getPrice();
validateForm();

getDataFromServer(function (data) {
  createAdds(data);
  onFilterChange((function() {
    createAdds(data)
  }))
})

