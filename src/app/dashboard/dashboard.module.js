(function() {
  'use strict';

  angular
    .module('dashboard', [
      'home'
      ])
    .config(['$stateProvider', function routerConfig($stateProvider) {
      $stateProvider
        .state('dashboard', {
          abstract: true,
          templateUrl: '/src/app/dashboard/dashboard.tpl.html'
        });
    }]);
})(); 