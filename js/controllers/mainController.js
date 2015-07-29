/// <reference path="../../typings/angularjs/angular.d.ts"/>

angular.module('angularRecap').controller('mainController', ['$scope', function($scope){
		$scope.message = "This is a min safed controller";
}]);


// Another way, perhaps more clean

(function(){
	
	var mainControllerToo = function($scope){
		$scope.message = "This is also a min safed controller";
	};
	
	angular.module('angularRecap').controller('mainControllerToo', mainControllerToo);
	mainControllerToo.$inject = ['$scope'];
	
})();