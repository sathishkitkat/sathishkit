'use strict';

(function(){

class SeatbookingComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.seatbooking = [];
    this.$socket = socket;
    this.data = '';
    $(document).ready(function() {
      $('.seaton').click(function() {
        var id = $(this).attr('id');
       $('#' + id).css('background-color', 'green');
      });
    });
  }
  Addseatbooking(){

    this.$http.post('/api/seatbookingendpoints',{
       title:this.title,
     city:this.city,
       data:this.title,
       amount:this.title,
       showtime:this.showtime
       numberofseat:this.title,
       seatnumber:this.title,
       cardno:this.title,
      }).then (response=> {
        console.log(response);
          console.log("seatbooking added");
    })
  }
  $onInit(){
    this.$http.get('/api/seatbookingendpoints/').then(response => {
      this.seatbookingdata = response.data;
      this.socket.syncUpdates('seatbookingendpoints', this.seatbookingdata);
    })
  }
}

angular.module('ticketbookingApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
