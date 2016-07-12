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

    $scope.deleteEmp = function(e, employee) {
      e.stopPropagation();
      if(confirm('Are you sure you want to delete this employee?')) {
        var employeeList = employeeRecordsCache.getEmployeeRecords();
        var index = employeeList.findIndex(function(emp){
          return emp.id == employee.id;
        });
        if(index === -1) {
          alert('Catastrophic error');
        } 
        employeeList.splice(index, 1);
        employeeRecordsCache.setEmployeeRecords(employeeList);
        getEmployeeData();
      }
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
