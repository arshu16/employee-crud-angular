(function() {
  'use strict';

  angular
  .module('adminActions')
  .controller('adminActionsController', ['$scope', 'appConstants', '$stateParams', 'employeeRecordsCache', 
    '$state', 'sharedEmployee', 'utils',
    function ($scope, appConstants, $stateParams, employeeRecordsCache, $state, sharedEmployee, utils) { 
    $scope.allCities = appConstants.CITIES;
    $scope.allQualifications = appConstants.QUALIFICATION;
    var employeeList = employeeRecordsCache.getEmployeeRecords();

    if($stateParams.id) {
      parseDateOrTime();
      $scope.employee = utils.quickCopy(getEmployee(+$stateParams.id));
    } else {
      if(Object.keys(sharedEmployee.employee).length > 1) {
        parseDateOrTime();
        $scope.employee = sharedEmployee.employee;
      } else {
        $scope.employee = utils.quickCopy(appConstants.NEW_FORM_DATA);
      }
    }

    function parseDateOrTime() {
      switch(sharedEmployee.employee.jobType) {
        case 'casual': 
          sharedEmployee.employee.startingDate = new Date(sharedEmployee.employee.startingDate);
          sharedEmployee.employee.endingDate = new Date(sharedEmployee.employee.endingDate);
          break;
        case 'partTime': 
          sharedEmployee.employee.startingHours = new Date(sharedEmployee.employee.startingHours);
          sharedEmployee.employee.endingHours = new Date(sharedEmployee.employee.endingHours);
          break;
      }
    }

    function getEmployee(id) {
      var toBeReturned;
      for(var i = 0; i < employeeList.length; i++) {
        if(+employeeList[i].id === id) {
          toBeReturned = employeeList[i];
          break;
        }
      }
      return toBeReturned || appConstants.NEW_FORM_DATA;
    }

    $scope.addAddressField = function() {
      $scope.employee.address.push('');
    };

    //Submit form
    $scope.confirmEmployee = function(e) {
    	e.preventDefault();
      sharedEmployee.employee = utils.quickCopy($scope.employee);
      $state.go('dashboard.details', {
        isConfirm: true
      });
    };

    $scope.goToHome = function() {
      sharedEmployee.employee = utils.quickCopy(appConstants.NEW_FORM_DATA);
      $state.go('dashboard.home');
    };
  }]);

})();
