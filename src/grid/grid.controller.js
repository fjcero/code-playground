'use strict';

import moment from 'moment'

export default class GridController {
  constructor (GridService, $filter, $scope) { 'ngInject';
    Object.assign(this, { GridService, $filter });
    this.items          = [];
    this.isLoading      = false;
    this.endOfCatalogue = false;
    this.loadMore();

    // Listen to Param modified by another Controller
    GridService.subscribe($scope, () => {
      this.items = [];
      this.endOfCatalogue = false;
      this.loadMore();
    });
  }

  loadMore () {
    if (this.endOfCatalogue) return;

    this.isLoading = true;

    this.GridService.getProducts().then(response => {
      if (response.data) {
        response.data.map((i)=>{
          i.date = this.formatDate(i.date)
          i.price = this.$filter('currency')(i.price);
          return i;
        })
        this.items = this.items.concat(response.data);
      } else {
        this.endOfCatalogue = true;
      }
      this.isLoading = false;
    }).catch(error => {
      console.log('Something bad happen', error);
    });

    // Set next page offset
    this.GridService.params.skip += this.GridService.params.limit;
  }

  formatDate (date) {
    date = moment(date);

    let today = moment();

    if (today.diff(date, 'days') < 7) {
      return date.fromNow()
    }

    return date.format('YYYY, d MMM');
  }
}
