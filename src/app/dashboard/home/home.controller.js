(function() {
  'use strict';

  angular
  .module('home')
  .controller('homeController', ['$scope', 'employeeRecordsCache', 'utils', '$state',
   function ($scope, employeeRecordsCache, utils, $state) { 

    function regexify(str) {
      if(str) {
        return new RegExp(str, 'gi');
      }
    }

    //function filtering out messages on name
    function filterList(regex) {
      if (!$scope.searchedEmployeeList) { 
        return false; 
      }
      var keyInUse = typeof $scope.searchText === 'number' ? 'contactNumber' : 
                    $scope.searchText.includes('@') ? 'email' : 'name';
      return $scope.employees.filter(function(elem) {
        if (!elem) { 
          return false; 
        }
        var value = elem[keyInUse] + '';
        return !!((value && value.match(regex)));
      });
    }

    //Handle the search and display filtered results
    $scope.handleSearch = function() {
      if(!$scope.searchText) {
        $scope.searchedEmployeeList = utils.quickCopy($scope.employees);
        return;
      }
      $scope.searchText = +$scope.searchText ? +$scope.searchText : $scope.searchText;
      $scope.searchedEmployeeList = filterList(regexify($scope.searchText));
    }

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
