/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {

	var repoController = function ($scope, $routeParams, gitHubService) {
		
		$scope.repo = null;
		$scope.error = '';
		
		gitHubService.getRepoDetails($routeParams.username, $routeParams.reponame)
					.then(function(data){
						$scope.repo = data;
					}, function(){
						$scope.error = 'Error getting the user or repo';
					});
					
	};

	angular.module('angularRecap').controller('repoController', repoController);
	repoController.$inject = ['$scope', '$routeParams', 'gitHubService'];

})();