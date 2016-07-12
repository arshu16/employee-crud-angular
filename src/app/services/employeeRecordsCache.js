(function() {
  'use strict';
  
  angular
    .module('services')
    .factory('employeeRecordsCache',[function(){
      var SAMPLE_DATA = [{
        id: 123,
        name: 'Ishmeet',
        designation: 'Developer',
        contactNumber: 1234567890,
        email: 'arshusingh16@gmail.com',
        department: 'UI',
        qualification:'graduate',
        gradCourse: 'B.Tech.',
        gradUniversity: 'JIIT',
        gradYear: 2015,
        city: 'Delhi',
        address: [
          'GG-3/34, Vikaspuri',
          'New Delhi'
        ],
        pinCode: 110018,
        jobType: 'fullTime'
      }];

      function setEmployeeRecords(toSet) {
        if(!toSet) {
          return;
        }
        window.localStorage.EMPLOYEE_RECORDS = JSON.stringify(toSet);
      }

      function getEmployeeRecords() {
        if(window.localStorage.EMPLOYEE_RECORDS) {
          return JSON.parse(window.localStorage.EMPLOYEE_RECORDS);
        }
        return [];
      }

      function getAndSetSampleData() {
        setEmployeeRecords(SAMPLE_DATA);
        return SAMPLE_DATA;
      }

      return {
        setEmployeeRecords: setEmployeeRecords,
        getEmployeeRecords: getEmployeeRecords,
        getAndSetSampleData: getAndSetSampleData
      };
    }]);
})();