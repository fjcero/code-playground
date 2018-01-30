'use strict';

import adComponent from './ad.component';
import AdService from './ad.service';

export default angular
  .module('app.ads', [])
  .component('ad', adComponent)
  .service('AdService', AdService)
  .name
