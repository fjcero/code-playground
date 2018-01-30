'use strict';

import _ from 'lodash'
import angular from 'angular'
import shared from './shared'
import grid from './grid'
import ads from './ads'

const APP_NAME = 'app'

// Bootstrapping Angular Application
angular.element(document).ready(function() {
  angular.bootstrap(document, [APP_NAME])
});

// App Dependencies
angular.module(APP_NAME, [
  grid,
  ads,
  shared
]);

console.info('Welcome to ASCII Store!')
