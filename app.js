var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second',
        controller: 'secondController'
    })
        .otherwise({
        redirectTo: 'pages/main',
    });



   .when('/third', {
        templateUrl: 'pages/third.html',
        controller: 'thirdController'
    });
}); 

myApp.controller('mainController', ['$scope', function($scope,$route) {
    $scope.nam ='FOOD VIOLATORS';
    $scope.title ='Food Recalls';


    
}]);


    $scope.phones = [
        {
            'name': 'Chipotle',
            'snippet': 'This ia a violaotion we want to dispaly need services olation #1',
            'age': 'Routine'},
    {'name': 'Zoya Sushi',
     'snippet': 'Violation number 1',
     'age': 2},
    {'name': 'Barb que Famous Daves',
     'snippet': 'Flamming good',
     'age': 3,}
    


        
myApp.controller('secondController', ['$scope',function($scope,$route) { 
    $scope.name ='12/2/05';
    $scope.ty= 'Lorem Ipson rgej raga homod opla djioj reek ans h nons lorem ipsun doma crtoto';
}]);
    


myApp.controller('thirdController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
})]);
