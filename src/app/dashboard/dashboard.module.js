(function() {
  'use strict';

  angular
    .module('dashboard', [
      'home',
      'adminActions',
      'details',
      'services',
      'common'
      ])
    .config(['$stateProvider', function routerConfig($stateProvider) {
      $stateProvider
        .state('dashboard', {
          abstract: true,
          templateUrl: '/src/app/dashboard/dashboard.tpl.html'
        });
    }]);
})(); 