'use strict';

import './ad.scss';
import AdController from './ad.controller';

let component = {
  template: `
    <div class="ad">
      <img src="/ad/?r={{::$ctrl.random}}" />
      <div class="ad--featured">Sponsored</div>
    </div>
  `,
  controller: AdController,
}

export default component
