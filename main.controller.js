'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket,$location,$cookies) {
      this.$http = $http;
      this.socket = socket;
      this.$location=$location;
      this.$cookies=$cookies;
      this.uniqueArray='';
      this.newdata=[];
      this.bkmovie=[];
      // this.awesomeThings = [];
      this.mapmovieDate= [];
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

//  toUnique1(a){
//   var b,c;
//  b=a.length;
//  while(c=--b)
//  while(c--)a[b]!==a[c]||a.splice(c,1);
//  return a;
//  alert(a);
// }
// var b,c;
// b=this.mapmovieDate.length;
// while(c=--b)
// while(c--)this.mapmovieDate[b]!==this.mapmovieDate[c]||this.mapmovieDate.splice(c,1);
// return this.mapmovieDate;
// alert(this.mapmovieDate);
//  this.toUnique(this.mapmovieDate);
// var arrayWithDuplicates = [
//
// ];

 removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      // return newArray;
      this.newdata=newArray;
      console.log(this.newdata);
 }

    $onInit() {
      this.$http.get('/api/mapmovieendpoints').then(response => {
      this.mapmovieDate = response.data;
      console.log(this.mapmovieDate);


this.removeDuplicates(this.mapmovieDate, "title");
      this.socket.syncUpdates('mapmovieendpoints', this.mapmovieDate);
      console.log("this.mapmovieDate: " + JSON.stringify(this.mapmovieDate));
      });
}

  Booking(moviess){
    for(var i=0;i<this.mapmovieDate.length;i++)
    {
      if(moviess.title==this.mapmovieDate[i].title)
      {
        this.bkmovie.push(this.mapmovieDate[i]);

       }

    }
console.log(this.bkmovie);
  var obj = {
    movieinfo:{
      bk:this.bkmovie,
      tit:moviess.title}};
      console.log(obj);
                      this.$cookies.putObject('info', obj);

                    this.$location.path('/seatbooking');
}

};

  angular.module('ticketbookingApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
