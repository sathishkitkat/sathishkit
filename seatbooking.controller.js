'use strict';

(function(){

class SeatbookingComponent {
  constructor($http, $scope, socket,$cookies) {
    this.message = 'Hello';
   this.$http = $http;
   this.$cookies=$cookies;
   this.seatbooking = [];
   this.$socket = socket;
  this.seatsres =seatsres;
   this.scope =[]; 
   this.data = [];
   this.minfo=[];
   this.bktitle='';
   this.stime=[];
   this.mapDates=[];
  this.goCats = false;
   this.seat=false;
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
     document.getElementById("mname").innerHTML=this.bktitle;
     document.getElementById("mtit").innerHTML=this.bktitle;

   }

 this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      this.cols = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

 // Set reserved and selected $rootScope.Rseat_no
var selected = [];
var reserved=[];
  this.getStatus = function(seatPos) {
  if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }

        }

        // clear selected
        this.clearSelected = function() {
            selected = [];
        }
this.seatClicked = function(seatPos) {
 console.log("Selected Seat: " + seatPos);
    var index = selected.indexOf(seatPos);
    if(index != -1) {
        // seat already selected, remove
        selected.splice(index, 1)
    } else {
        // new seat, push
        selected.push(seatPos);
console.log(selected);

document.getElementById("st").innerHTML=selected;
        seatNum=document.getElementById("st").innerHTML;

       noofSeats=selected.length;
         sel = document.getElementById("seats").value;
  document.getElementById("totalst").innerHTML =sel;
   if(sel==noofSeats)
         {
           total=noofSeats*200;
            document.getElementById("amt").innerHTML = total;
            this.goCats = false;

}
reserved.push(seatPos);
console.log(reserved);
  this.seatsres=reserved;

 }

  window.bookedSeats = response.data;
        this.socket.syncUpdates('seatbookingendpoint', window.bookedSeats);
        window.disableSeats();
window.disableSeats=function(){
        for(var a=0;a<bookedSeats.length;a++){
          for(var b=0;b<bookedSeats[a].Seats.length;b++){
            var id=window.bookedSeats[a].Seats[b];
            $('#'+id).attr('src','assets/Images/R_chair.gif');
          }
        }
      }
    }
 }
};


  //  }
  //  console.log(this.mapDates);
//    for(var j=0; j<this.minfo.length;j++)
//    {
//      for(var k=0; i<this.minfo[j].showtime.length;j++)
//      {
// this.stime.push(this.minfo[j].showtime[k]);
//      }
//
//    }
// console.log(this.stime);


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
