'use strict';

export default class AdController {
  constructor (AdService) { 'ngInject';
    this.random = AdService.randomize();
  }
}

