/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {

	var userController = function ($scope, $routeParams, gitHubService) {
		$scope.user = null;
		$scope.userRepos = null;
		$scope.getUserError = '';
		$scope.getReposError = '';
		$scope.userReposSortOrder = '-stargazers_count';
		
		
		var getUserRepos = function(){
			gitHubService.getUserRepo($scope.user)
						.then(function(repos){
							$scope.getReposError = '';
							$scope.userRepos = repos;
						}, function(){
							$scope.getReposError = 'Error fetching the users repo';
						});
		};
		
		var getUser = function(){
			gitHubService.getUser($routeParams.username)
				.then(function (user) {
					$scope.error = '';
					$scope.user = user;
					getUserRepos();
				}, function () {
					$scope.getUserError = 'Error fetching the user';
					$scope.getReposError = 'Error fetching the users repo';
				});
		};

		getUser();
	};

	angular.module('angularRecap').controller('userController', userController);
	userController.$inject = ['$scope', '$routeParams', 'gitHubService'];

})();