(function() {
  'use strict';

  angular
    .module('common')
    .factory('appConstants', function () {

      return  {
        CITIES: {
          mumbai: 'Mumbai', 
          delhi: 'Delhi', 
          kolkata: 'Kolkata', 
          chennai: 'Chennai', 
          bangalore: 'Bangalore', 
          hyderabad: 'Hyderabad', 
          ahemdabad: 'Ahemdabad', 
          pune: 'Pune',
          other: 'Other'
        },
        QUALIFICATION: {
          graduate: 'Graduate',
          postGraduate: 'Post Graduate'
        }
      };
    });
})();
