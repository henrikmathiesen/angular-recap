/// <reference path="../../typings/angularjs/angular.d.ts"/>

angular.module('angularRecap').controller('mainController', ['$scope', function($scope){
		$scope.message = "This is a min safed controller";
}]);


// Another way, perhaps more clean regarding min safing

(function(){
	
	var mainControllerToo = function($scope, $http){
		$scope.message = "This is also a min safed controller";
		$scope.person = {
			firstName: 'John',
			lastName: 'Doe',
			image: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg'
		};
		$scope.query = '';
		$scope.user = null;
		$scope.userRepos = null;
		$scope.userReposSortOrder = '-stargazers_count';
		$scope.error = '';
		
		
		var makeUserRepoAjaxCall = function(){
			$http.get($scope.user.repos_url)
				.then(function(response){
					console.log(response.data);
					$scope.userRepos = response.data;
				});
		};
		
		var makeUserAjaxCall = function(){
			$http.get('https://api.github.com/users/' + ($scope.query || 'octocat'))
					.then(function(response){
						console.log(response.data);
						$scope.user = response.data;
						$scope.error = '';
						makeUserRepoAjaxCall();
					}, function(response){
						$scope.error = "Error fetching the user"
					});
		};
		
		$scope.searchUser = function(){
			makeUserAjaxCall();	
		};
		
		
		//makeUserAjaxCall();
	};
	
	angular.module('angularRecap').controller('mainControllerToo', mainControllerToo);
	mainControllerToo.$inject = ['$scope', '$http'];
	
})();