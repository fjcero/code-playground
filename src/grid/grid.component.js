'use strict';

import './grid.scss'
import GridController from './grid.controller'

let component = {
  template: `
    <section class="container">
      <grid-sorting></grid-sorting>
      <div class="row" infinite-scroll="$ctrl.loadMore()">
        <div
          class="col-xs-12 col-sm-6 col-md-4"
          ng-repeat="item in $ctrl.items track by item.id">
          <div class="product" ng-if="::($index == 0 || $index%20!==0)">
            <div class="product--face" style="font-size:{{::item.size}}px">{{::item.face}}</div>
            <div class="product--price">{{::item.price}}</div>
            <div class="product--date">{{::item.date}}</div>
          </div>
          <ad ng-if="::($index>1 && $index%20===0)"></ad>
        </div>
      </div>
      <div class="grid--end" ng-if="$ctrl.endOfCatalogue">
        <span class="grid--end--star">★</span> End of Catalogue <span class="grid--end--star">★</span>
      </div>
      <spinner is-loading="$ctrl.isLoading"></spinner>
    </section>
  `,
  controller: GridController,
  bindings: {}
}

export default component


