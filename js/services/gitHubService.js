(function(){
	
	var gitHubService = function($http){
		
		var _gitHubUrl = 'https://api.github.com';
		
		var getUser = function(userName){
			return $http.get(_gitHubUrl + '/users/' + userName)
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
		
		var getRepoDetails = function(userName, repoName){
			var repo = null;
			var url = _gitHubUrl + '/repos/' + userName + '/' + repoName;
			
			return $http.get(url)
						.then(function(response){
							repo = response.data;
							return $http.get(url + '/collaborators'); // 401 (Unauthorized)
						})
						.then(function(response){
							repo.collaborators = response.data;
							return repo;
						});
		};
		
		return {
			getUser: getUser,
			getUserRepo: getUserRepo,
			getRepoDetails: getRepoDetails
		};
	};
	
	angular.module('angularRecap').factory('gitHubService', gitHubService);
	gitHubService.$inject = ['$http'];
	
})();