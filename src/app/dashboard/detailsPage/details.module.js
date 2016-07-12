(function() {
  'use strict';

  angular
    .module('details', [
      'services'
      ])
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('dashboard.details', {
          templateUrl: '/src/app/dashboard/detailsPage/details.tpl.html',
          url: '/details/:id/:isConfirm',
          controller: 'detailsController'
        });        
    }]);
})(); 