angular.module('myApp',[
	'ngRoute',
	'myApp.in_theatersModuleCtrl',
	'myApp.service',
	'myApp.coming_soonModuleCtrl',
	'myApp.top250ModuleCtrl',
	'myApp.searchModuleCtrl',
	'myApp.route'
])

	.controller('commonCtrl',['$scope','$location',function($scope,$location){

		$scope.currentClass = 'in_theaters';

		$scope.searchData = function(){

			$location.path('/search/1/' + $scope.keyword);

			$scope.keyword = '';

		}

	}])
	
	




















































