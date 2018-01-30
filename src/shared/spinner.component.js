'use strict';

import './spinner.scss'

let component = {
  bindings: {
    isLoading: '<'
  },
  template: `
    <div class="spinner" ng-show="$ctrl.isLoading">
      <div class="spinner--container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  `
}

export default component
