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
      this.len='';
      this.i='';
      this.arr=[];
      this.tdata=[];
      this.st='';
      // var data1='';
      $scope.$on('$destory',function() {
        socket.unsyncupdates('mapmovieendpoints');
      });
  }

  Addmapmovie() {
    this.len=$('#mySelect').children('option').length;
     for (this.i = 0; this.i < this.len; this.i++) {
      this.arr[this.i]=$('#mySelect option').eq(this.i).val();
    }
    this.$http.post('/api/mapmovieendpoints',{
     location:this.location,
      theatrename:this.theatrename,
      moviesname:this.moviesname,
      showtime:this.showtime
      // fromdate:this.fromdate,
      // todate:this.todate
    }).then (response => {
        console.log(response);
        //  console.log("mapmovies added");
      // this.mapmoviesDate = response.data;
      });
    }
    getshowtime(){
      var data1=  this.tdata;
    var uniqueNames = [];
                                                                var uniqueObj = [];
                                                                for(var i = 0; i< data1.length; i++){
                                                                    if(data1[i].theatrename==this.tname){
                                                                    if(uniqueNames.indexOf(data1[i].showtime) === -1){
                                                                        uniqueObj.push(data1[i])
                                                                        uniqueNames.push(data1[i].showtime);}}
                                                                        console.log(uniqueNames);
                                                                        this.st=uniqueNames;
    }
  }
 $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
    this.data = response.data;
    this.socket.syncUpdates('mapmovieendpoints', this.data);
   });
   this.$http.get('/api/theatreendpoints').then(response=> {
  this.tdata = response.data;
  console.log(response.data);
  // data1=  this.tdata;



});

}
Add() {
this.data = document.getElementById('UserSelector').value;
// alert(this.data);
$('#mySelect').append("<option value='"+this.data+"'>"+this.data+"</option>");
}

// this.data.ready( function() {
//         my_basic_cal = new ng.Calendar({
//         this.input: 'date1',
//         this.start_date: 'last year',
//         this.end_date: 'year + 5',
//         this.display_date: new Date()
//     });
//  });
      //  $(document).ready(function () {
       //
      //          $('#example1').datepicker({
      //              format: "dd/mm/yyyy"
      //          });
       //
      //      });


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
