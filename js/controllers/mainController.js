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
		$scope.user = {};
		$scope.error = '';
		
		$http.get('https://api.github.com/users/octocat')
				.then(function(response){
					console.log(response.data);
					$scope.user = response.data;
				}, function(response){
					$scope.error = "Error fetching the user"
				});
	};
	
	angular.module('angularRecap').controller('mainControllerToo', mainControllerToo);
	mainControllerToo.$inject = ['$scope', '$http'];
	
})();