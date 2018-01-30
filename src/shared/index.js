'use strict';

import spinnerComponent from './spinner.component';
import infiniteScrollDirective from './infinite-scroll.directive';

export default angular
  .module('app.shared', [])
  .component('spinner', spinnerComponent)
  .directive('infiniteScroll', infiniteScrollDirective)
  .name
