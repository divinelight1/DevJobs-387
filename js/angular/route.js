// script for initializing content to index


var myApp = angular.module('myApp' , ['ngRoute']);

myApp.config(  function ($routeProvider){
	$routeProvider

	.when('/' , {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/about' , {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
	.when('/jobs' , {
		templateUrl: 'pages/jobs.html',
		controller: 'jobsController'
	})
	.when('/contact' , {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
	.when('/add-job' , {
		templateUrl: 'pages/add-job.html',
		controller: 'addjobController'
	})
});


// controlers



myApp.controller('homeController' , ['$scope' , '$log' , function($scope , $log){

}]);

myApp.controller('aboutController' , ['$scope' , '$log' , function($scope , $log){

}]);

myApp.controller('jobsController' , ['$scope' , '$log' , function($scope , $log){

}]);
myApp.controller('contactController' , ['$scope' , '$log' , function($scope , $log){

}]);
myApp.controller('addjobController' , ['$scope' , '$log' , function($scope , $log){

}]);