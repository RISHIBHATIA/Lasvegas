// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter','$http', function ($scope,$filter,$http) {
    $scope.name='George';
    $scope.occupation ='director';
    $scope.handle ='';
    $scope.characters= 6; 
    $scope.lucasmovies=['FilmA','FilmB','FilmC'];
    $scope.movies= [{ title:'Star Wars A New Hope', year: 1976, location:'Pinewood UK'}];
    
    
    $http({
     method:'GET',
     url:'https://opendata.lasvegasnevada.gov/resource/q8ye-5kwk.json'
     }).then(function successCallback(response){
        $scope.inspecs=response.data;
        $scope.inspecs.address;
        $scope.inspecs.inspection_date =true;
        $scope.inspecs.violation_points =true;
        $scope.inspecs.violation_description;
        $scope.inspecs.restaurant_name;
        $scope.inspecs.current_demerits;
        $scope.inspecs.violations;
        console.log(response);
        }, function errorCallback(response) {
        });
    
    
}]);
