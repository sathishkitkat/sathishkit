'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seatbooking', {
        template: '<seatbooking></seatbooking>'
      });
  });
