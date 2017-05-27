'use strict';

(function(){

class ReviewComponent {
  constructor($http,socket,$scope,$location) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket =socket;
    this.$location=$location;
    this.moviesData =[];
    this.bookmovie =[];
    // this.$cookies =[];
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('reviewendpoint');
    });
  }

  Addrating() {
this.$http.post('/api/reviewendpoints/', {
     username: this.username,
     movietitle:document.getElementById("mname").innerHTML,
     comment:this.comment,
     rating: this.rating
   }).then(response=> {
   console.log(response);
  
 });

 }
  $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
    this.moviesData = response.data;
      console.log(this.moviesData);

});
}
review(m)
{
  // console.log(m.Title);console.log(this.m.Title);
  document.getElementById("mname").innerHTML=m.Title;
}
  // Booking(mov){
  //   for(var i=0;i<this.moviesData.length;i++)
  //   {
  //     if(mov.title ==this.moviesData[i].title)
  //     {
  //       this.bookmovie.push(this.moviesData[i]);
  //
  //      }
  //
  //   }
  //  console.log(this.bookmovie);
//   var obj = {
//     movieinfo:{
//       book:this.bookmovie,
//       tit:moviess.title}};
//       console.log(obj);
//                       this.$cookies.putObject('info', obj);

                    // this.$location.path('/seatbooking');



};
angular.module('ticketbookingApp')
  .component('review', {
    templateUrl: 'app/review/review.html',
    controller: ReviewComponent,
    controllerAs: 'reviewCtrl'
  });

})();
