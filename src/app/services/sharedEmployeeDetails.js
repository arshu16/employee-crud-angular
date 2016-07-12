(function() {
  'use strict';

  angular
    .module('services')
    .factory('sharedEmployee', ['appConstants',  function (appConstants) {
      var employee = appConstants.NEW_FORM_DATA;
      return {
        employee: employee
      };
    }]);
})();
