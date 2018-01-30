'use strict';

const API_URL = '/api';

export default class GridService {
  constructor ($http, $rootScope) { 'ngInject';
    Object.assign(this, { $http, $rootScope });

    this.sortFields = [
      { id: 'id', label: 'ID' },
      { id: 'size', label: 'Size' },
      { id: 'price', label: 'Price' },
    ];

    this.params = {
      limit: 20,
      skip: 0,
      sort: 'price',
    }
  }

  getProducts () {
    return this.$http.get(`${API_URL}/products`, {
      params: this.params,
      transformResponse: this._tranformJsonStream
    });
  }

  notify (params) {
    this.$rootScope.$emit('$gridServiceParamsUpdate', params);
  }

  subscribe (scope, callback) {
    var handler = this.$rootScope.$on('$gridServiceParamsUpdate', callback);
    scope.$on('$destroy', handler);
  }

  _tranformJsonStream (data, headers) {
    if (_.isEmpty(data))  return false;

    return data.trim().split('\n').map(i => {
      return JSON.parse(i);
    })
  }
}
