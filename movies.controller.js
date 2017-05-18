'use strict';

(function(){

class MoviesComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.moviesData = [];
    this.socket =socket ;
    this.data ='';
    this.omdbdata =[];
    this.movieObj= [];
     this.key ='';
    $scope.$on('$destory',function() {
      this.socket.unsyncupdates('thing');
    });
  }
  getmovie(){
    this.$http.get('http://www.omdbapi.com/?t='+this.name+'&y='+this.year+'&plot=full&r=json').then (response =>{
    console.log(response.data);
    this.socket.syncUpdates('Movies', this.omdbdata);

    for(var key in response.data)
    {
     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' || key== 'Plot')
         {
        this.movieObj[key] = response.data[key];
      }
     console.log(this.movieObj);
     }
     //   console.log(response.data.length);
     //   console.log(response.length);
     // var key;
     // for(key = 0; key < this.len; this.key++){
     //           this.arr[this.key]=("current key" + this.key );
     //
     //        }
  });

}
  Addmovies() {
this.$http.post('/api/moviesendpoints', {
     Title: this.omdbdata.Title,
     Language: this.omdbdata.Language,
     Genre: this.omdbdata.Genre,
     Director: this.omdbdata.Director,
     Actors: this.omdbdata.Actors,
     Year: this.omdbdata.Year,
     Plot: this.omdbdata.Plot,
     Poster: this.omdbdata.Poster,
     Status: false
   })
   .then (response=> {
   console.log(response);
 });
}


 //   this.$http.post('/api/moviesendpoints', {
 //    Title : this.m.Title,
 //     Year : this.m.Year,
 //     Language : this.m.Language,
 //     Poster : this.m.Poster,
 //     Genre : this.m.Genre,
 //      Director : this.m.Director,
 //     Actors : this.m.Actors,
 //     Plot : this.m.Plot
 //
 //     var movies = new movies({
 //       Title:titte,
 //       Year:year,
 //       Language:Language,
 //       Poster:poster,
 //       Genre:gener,
 //       Director:director,
 //       Actors:actors
 //     })
 //   }



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
    controllerAs: '$moviesCtrl'
  });

})();
