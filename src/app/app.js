/*
  app.js: main file which starts the application
*/
(function() {
  'use strict';

  angular
    .module('employeeCrud', [
      'ui.router',
      'dashboard'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
      // $locationProvider.hashPrefix('').html5Mode({ //Remove the hashbangs, #! killing you
      //   enabled: true,
      //   requireBase: true
      // });

      $urlRouterProvider.otherwise('/home');
    }]);

})();