/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var anchorscrollController = function($scope, $location, $anchorScroll){
		
		$scope.anchorScroll = function(){
			$location.hash('scroll-to-here');
			$anchorScroll();
		};

	};
	
	angular.module('angularRecap').controller('anchorscrollController', anchorscrollController);
	anchorscrollController.$inject = ['$scope', '$location', '$anchorScroll'];
	
})();