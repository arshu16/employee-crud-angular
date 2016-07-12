(function() {
  'use strict';
  
  angular
    .module('services')
    .factory('utils',[function(){

      function quickCopy(toCopy) {
        if(!toCopy) {
          return {};
        }
        return JSON.parse(JSON.stringify(toCopy));
      }
      
      return {
        quickCopy: quickCopy
      };
    }]);
})();