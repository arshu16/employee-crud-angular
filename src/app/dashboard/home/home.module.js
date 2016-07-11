(function() {
  'use strict';

  angular
    .module('home', [])
    .config(['$stateProvider', function routerConfig($stateProvider) {

      $stateProvider
        .state('dashboard.home', {
          templateUrl: '/src/app/dashboard/home/home.tpl.html',
          url: '/home',
          controller: 'homeController',
        });        
    }]);

})(); 