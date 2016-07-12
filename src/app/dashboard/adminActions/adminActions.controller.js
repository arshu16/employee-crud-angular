(function() {
  'use strict';

  angular
  .module('adminActions')
  .controller('adminActionsController', ['$scope', 'appConstants', function ($scope, appConstants) { 
    $scope.employee = {
    	address: [
    		''
    	]
    };
    $scope.allCities = appConstants.CITIES;
    $scope.allQualifications = appConstants.QUALIFICATION;

    //Submit form
    $scope.confirmEmployee = function(e) {
    	e.preventDefault();
    	window.console.log('This is the employee', $scope.employee);
    };
  }]);

})();
