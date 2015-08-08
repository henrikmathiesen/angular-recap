/// <reference path="../../typings/angularjs/angular.d.ts"/>

/*
angular.module('angularRecap').controller('mainController', ['$scope', function($scope){
		$scope.message = "This is a min safed controller";
}]);
*/


// Another way, perhaps more clean regarding min safing

(function(){
	
	var mainController = function($scope, $interval, $location){
		var interval = null;
		
		$scope.query = 'octocat';
		$scope.countdown = 5;
		
		
		$scope.searchUser = function(){
			$interval.cancel(interval);
			$location.path('/user/' + $scope.query);
		};
		
		var makeCountdown = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1) {
				$scope.searchUser();
			} 
		};
		
		interval = $interval(makeCountdown, 1000);

	};
	
	angular.module('angularRecap').controller('mainController', mainController);
	mainController.$inject = ['$scope', '$interval', '$location'];
	
})();