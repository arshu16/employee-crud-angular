(function() {
  'use strict';

  angular
    .module('adminActions', [])
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('dashboard.adminActions', {
          templateUrl: '/src/app/dashboard/adminActions/adminActions.tpl.html',
          url: '/action?action',
          controller: 'adminActionsController'
        });        
    }]);
})(); 