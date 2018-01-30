'use strict';

import GridSortingController from './grid-sorting.controller'

let component = {
  template: `
    <div class="row"><div class="col-xs-12">
      <br/>
      <div class="btn-group pull-xs-right">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sorting
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            ng-click="$ctrl.sort(field.id)"
            ng-repeat="field in $ctrl.sortFields track by field.id">
            <i ng-show="field.id === $ctrl.currentField">✔</i> {{field.label}}</a>
        </div>
      </div>
    </div></div>
  `,
  controller: GridSortingController,
}

export default component
