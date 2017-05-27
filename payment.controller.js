'use strict';

(function(){

class PaymentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ticketbookingApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
