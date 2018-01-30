'use strict';

export default class GridSortingController {
  constructor (GridService) { 'ngInject';
    Object.assign(this, { GridService });

    this.sortFields = GridService.sortFields;
    this.currentField = GridService.params.sort;
  }

  sort (field) {
    this.currentField = field;
    this.GridService.params.sort = field;
    this.GridService.params.skip = 0;
    this.GridService.notify();
  }
}
