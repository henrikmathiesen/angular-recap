/// <reference path="../../typings/angularjs/angular.d.ts"/>

// We dont store this in an 'app' variable, to avoid global variables
// We can get to this module like this instead angular.module('angularRecap').controller(...)
// http://stackoverflow.com/questions/17035890/angular-convention-for-declaring-controllers
angular.module('angularRecap', ['ngRoute']);


// Routing

(function(){
	
	var config = function($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl: 'main.html',
				controller: 'mainController'
			})
			.when('/user/:username', {
				templateUrl: 'user.html',
				controller: 'userController'
			})
			.when('/repo/:username/:reponame', {
				templateUrl: 'repo.html',
				controller: 'repoController'
			})
			.when('/anchorscroll', {
				templateUrl: 'anchorscroll.html',
				controller: 'anchorscrollController'
			})
			.otherwise({ redirectTo: '/main' });
	};
	
	angular.module('angularRecap').config(config);
	config.$inject = ['$routeProvider'];
	
})();