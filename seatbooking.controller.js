'use strict';

(function(){

class SeatbookingComponent {
  constructor($http, $scope, socket,$cookies) {
    this.message = 'Hello';
   this.$http = $http;
   this.$cookies=$cookies;
   this.seatbooking = [];
   this.$socket = socket;
   this.data = [];
   this.minfo=[];
   this.bktitle='';
    // this.seatArray = [];

  }
  $onInit(){
    var info = this.$cookies.getObject('info');
    console.log(info);
    if(info!=undefined){
    var minfo=info.movieinfo.bk;
     console.log(minfo);
     this.bktitle=info.movieinfo.tit;
     this.minfo=minfo;
     console.log(this.bktitle);
     console.log(this.minfo);
   }
 }

};

// function addSeat(seat) {
// seatArray.push(seat);
// this.data = document.getElementById("textarea").innerHTML="Seats : ";

  // for (x in arraytest) {
  //  this.data = document.getElementById("textarea").innerHTML+=" ";
  //   }
//   }
// };

// $(document).ready(function() {
//     $("#payment-form").submit(function(event) {
//         $('#submitBtn').attr('disabled', 'disabled');
//         return false;
//     });
// });


//
// var error = false;
// var ccNum = $('.card-number').val(),
//     cvcNum = $('.card-cvc').val(),
//
//  if (!Stripe.card.validateCardNumber(ccNum)) {
//     error = true;
//     reportError('The credit card number appears to be invalid.');
// }
//
// if (!Stripe.card.validateCVC(cvcNum)) {
//     error = true;
//     reportError('The CVC number appears to be invalid.');
//  }


angular.module('ticketbookingApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
