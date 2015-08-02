/// <reference path="../../typings/angularjs/angular.d.ts"/>

angular.module('angularRecap').controller('mainController', ['$scope', function($scope){
		$scope.message = "This is a min safed controller";
}]);


// Another way, perhaps more clean regarding min safing

(function(){
	
	var mainControllerToo = function($scope, $interval, $log, $location, $anchorScroll, gitHubService){
		var interval = null;
		
		$scope.message = "This is also a min safed controller";
		$scope.person = {
			firstName: 'John',
			lastName: 'Doe',
			image: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg'
		};
		$scope.query = 'octocat';
		$scope.countdown = 5;
		$scope.user = null;
		$scope.userRepos = null;
		$scope.userReposSortOrder = '-stargazers_count';
		$scope.error = '';
		
		
		var makeUserRepoAjaxCall = function(){
			gitHubService.getUserRepo($scope.user.repos_url)
				.then(function(repos){
					$scope.userRepos = repos;
					$location.hash('user-details');
					$anchorScroll();
				});
		};
		
		var makeUserAjaxCall = function(){
			$interval.cancel(interval);
			$scope.countdown = 0;
			$log.info("Searching for user: " + $scope.query);
			
			gitHubService.getUser($scope.query)
					.then(function(user){
						$scope.user = user;
						$scope.error = '';
						makeUserRepoAjaxCall();
					}, function(response){
						$scope.error = "Error fetching the user"
					});
		};
		
		$scope.searchUser = function(){
			makeUserAjaxCall();	
		};
		
		var makeCountdown = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1) {
				makeUserAjaxCall();
			} 
		};
		
		interval = $interval(makeCountdown, 1000);
		
		//makeUserAjaxCall();
	};
	
	angular.module('angularRecap').controller('mainControllerToo', mainControllerToo);
	mainControllerToo.$inject = ['$scope', '$interval', '$log', '$location', '$anchorScroll', 'gitHubService'];
	
})();