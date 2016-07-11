(function() {
  'use strict';

  angular
  .module('adminActions')
  .controller('adminActionsController', ['$scope', function ($scope) { 
    
   window.console.log('This is the scope', $scope);
  }]);

})();
