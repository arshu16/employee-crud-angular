(function() {
  'use strict';

  angular
  .module('home')
  .controller('homeController', ['$scope', 'employeeRecordsCache', 'utils', '$state',
   function ($scope, employeeRecordsCache, utils, $state) { 

    $scope.modifyEmp = function(e, employee){
      e.stopPropagation();
      $state.go('dashboard.adminActions', {
        id: employee.id
      });
    };
    
    function getEmployeeData() {
      var employees = employeeRecordsCache.getEmployeeRecords();
      if(!employees.length) {
        employees = employeeRecordsCache.getAndSetSampleData();
      }
      $scope.employees = utils.quickCopy(employees);
      $scope.searchedEmployeeList = utils.quickCopy(employees);
    }

    $scope.showDetails = function(emp) {
      $state.go('dashboard.details',{
        id: emp.id
      });
    }

    function init() {
      getEmployeeData();
    }

    init();
   
  }]);

})();
