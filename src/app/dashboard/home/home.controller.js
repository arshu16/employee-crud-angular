(function() {
  'use strict';

  angular
  .module('home')
  .controller('homeController', ['$scope', 'employeeRecordsCache', 'utils',
   function ($scope, employeeRecordsCache, utils) { 
    
    function getEmployeeData() {
      var employees = employeeRecordsCache.getEmployeeRecords();
      if(!employees.length) {
        employees = employeeRecordsCache.getAndSetSampleData();
      }
      $scope.employees = utils.quickCopy(employees);
      $scope.searchedEmployeeList = utils.quickCopy(employees);
    }

    function init() {
      getEmployeeData();
    }

    init();
   
  }]);

})();
