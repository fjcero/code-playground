'use strict';

export default class AdService {
  constructor () { 'ngInject';
    this.usedRandom = [];
  }

  randomize () {
    let max = 16;
    let random = Math.floor(Math.random() * max);

    if (this.usedRandom.length === max) {
      this.usedRandom = []
    }

    if (this.usedRandom.indexOf(random) !== -1) {
      return this.randomize()
    }

    this.usedRandom.push(random)

    return random
  }
}
