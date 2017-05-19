'use strict';

(function(){

class MapmoviesComponent {
  constructor($http,$scope,socket) {
      this.message = 'Hello';
      this.$http = $http;
      this.mapmovieDate = [];
      this.data = [];
      this.socket = socket;
      this.mapmovieid='';
      this.tdata=[];
      $scope.$on('$destory',function() {
        socket.unsyncupdates('mapmovieendpoints');
      });
  }
  Addmapmovie() {
    this.$http.post('/api/mapmovieendpoints',{
     location:this.location,
      theatrename:this.theatrename,
      moviesname:this.moviesname,
      showtime:this.showtime,
      fromdate:this.fromdate,
      todate:this.todate
    }).then (response => {
        console.log(response)
      this.mapmoviesDate = response.data;
      });
 }
 $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
    this.data = response.data;
    this.socket.syncUpdates('mapmovieendpoints', this.data);
   });
   this.$http.get('/api/theatreendpoints').then(response=> {
  this.tdata = response.data;
});

}


 Edit(mapmovieDate)
 {
   this.$http.get('/api/mapmovieendpoints/' + mapmovieDate._id).then(response=> {
                                this.title = response.data.title;
                                this.tname = response.data.tname;
                                this.location = response.data.location;
                                this.showtime =response.data.showtime;
                                this.fromdate = response.data.fromdate;
                                this.todate = response.data.todate;
                                this.mapmovieid=mapmovieDate._id;
    });
 }

}

angular.module('ticketbookingApp')
  .component('mapmovies', {
    templateUrl: 'app/mapmovies/mapmovies.html',
    controller: MapmoviesComponent,
    controllerAs: 'mapmoviesCtrl'
  });

})();
