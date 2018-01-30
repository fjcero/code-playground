'use strict';

import GridService from './grid.service'
import gridComponent from './grid.component'
import gridSortingComponent from './grid-sorting.component'

export default angular
  .module('app.grid', [])
  .component('grid', gridComponent)
  .component('gridSorting', gridSortingComponent)
  .service('GridService', GridService)
  .name
