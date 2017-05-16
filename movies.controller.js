'use strict';

(function(){

class MoviesComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.moviesData = [];
    this.socket =socket ;
    this.data ='';
    this.movieObj= [];
    // this.key ='';
    $scope.$on('$destory',function() {
      this.socket.unsyncupdates('thing');
    });
  }
  getmovie(){
    this.$http.get('http://www.omdbapi.com/?t='+this.name+'&y='+this.year+'&plot=full&r=json').then (response =>{
    console.log(response.data);
    for(var key in response);
    {
     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' || key== 'Plot')
         {
        this.movieObj[key] = response[key];
      }
     console.log(this.movieObj);
     }
  });
}


 // AddMovies() {
  //  this.$http.post('/api/moviesendpoints',{
  //    name: this.name,
  //    year: this.year
  //  }).
  //   then (response=> {
  //   console.log(response);
  //   });
  // }

$onInit() {
    this.$http.get('/api/moviesendpoints').then (response =>{
    this.moviesData = response.data;
    this.socket.syncUpdates('moviesendpoints', this.moviesData);
  });
 }
};
angular.module('ticketbookingApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();
