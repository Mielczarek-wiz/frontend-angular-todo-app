var nodeTodo = angular.module("nodeTodo", []);

nodeTodo.run(function($rootScope) {
	$rootScope.active_tab = 1;
});

nodeTodo.config(function($routeProvider) {
 
	$routeProvider
	
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
    .when('/done', {
			templateUrl: 'pages/done.html',
			controller: 'doneController'
		})
    .when('/active', {
			templateUrl: 'pages/active.html',
			controller: 'activeController'
		})
 
		.otherwise({
			redirectTo: '/',
			controller: 'mainController'
		});
});
