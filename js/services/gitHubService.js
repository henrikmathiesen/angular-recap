(function(){
	
	var gitHubService = function($http){
		
		var getUser = function(userName){
			return $http.get('https://api.github.com/users/' + userName)
						.then(function(response){
							return response.data;
						});
		};
		
		var getUserRepo = function(user){
			return $http.get(user.repos_url)
						.then(function(response){
							return response.data;
						});
		};
		
		return {
			getUser: getUser,
			getUserRepo: getUserRepo
		};
	};
	
	angular.module('angularRecap').factory('gitHubService', gitHubService);
	gitHubService.$inject = ['$http'];
	
})();