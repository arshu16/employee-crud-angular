(function() {
  'use strict';

  angular
  .module('details')
  .controller('detailsController', ['$scope', '$stateParams', '$state', 'employeeRecordsCache', 'sharedEmployee', 
    'appConstants', 'utils',
    function ($scope, $stateParams, $state, employeeRecordsCache, sharedEmployee, appConstants, utils) {
      var id = +$stateParams.id;
      $scope.isConfirmPage = $stateParams.isConfirm === 'true';
      var employeeList = employeeRecordsCache.getEmployeeRecords();
      $scope.qualificationMap = appConstants.QUALIFICATION_MAP;
      $scope.employmentTypeMap = appConstants.EMPLOYMENT_TYPE_MAP;
      $scope.capitalizeFirstLetter = utils.capitalizeFirstLetter;

      if(id) {
        $scope.employee = utils.quickCopy(getEmployee());
        if(!$scope.employee) {
          alert('Could not find employee with this id');
          $state.go('dashboard.home');
        }
      } else {
        $scope.employee = sharedEmployee.employee;
        id = $scope.employee.id;
      }

      function getEmployee() {
        var toBeReturned;
        for(var i = 0; i < employeeList.length; i++) {
          if(+employeeList[i].id === id) {
            toBeReturned = employeeList[i];
            break;
          }
        }
        return toBeReturned;
      }

      function modifyExistingEmp() {
        for(var i = 0; i < employeeList.length; i++) {
          if(+employeeList[i].id === $scope.employee.id) {
            employeeList[i] = $scope.employee;
            break;
          }
        }
        finalizeForm();
      }

      function checkIfIdTaken() {
        var element = employeeList.find(function(employee){
          return +employee.id === $scope.employee.id
        });
        return !!element;
      }

      function createNewEmployee() {
        if(checkIfIdTaken()) {
          alert('Cannot make a same ID employee');
          return;
        }
        employeeList.push($scope.employee);
        finalizeForm();
      }

      function finalizeForm() {
        employeeRecordsCache.setEmployeeRecords(employeeList);
        sharedEmployee.employee = utils.quickCopy(appConstants.NEW_FORM_DATA);
        $state.go('dashboard.home');
      }

      $scope.confirmEmployee = function() {
        if(id) {
          modifyExistingEmp();
        } else {
          createNewEmployee();
        }
      };

      $scope.goBack = function(){
        if(!$scope.isConfirmPage) {
          $state.go('dashboard.home')
        } else {
          $state.go('dashboard.adminActions');
        }
      };
  }]);

})();
