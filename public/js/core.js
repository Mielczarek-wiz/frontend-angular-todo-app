// Creating main module of angular
var nodeTodo = angular.module("nodeTodo", []);

// On start (and on succesfully changing path URL) module setting active tab to corresponding window location.
nodeTodo.run(function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function() {
		if(window.location.hash === "#/active"){
			$rootScope.active_tab = 3;
		}
		else if (window.location.hash === "#/done") {
			$rootScope.active_tab = 2;
		} else {
			$rootScope.active_tab = 1;
		}
	  });
});

// Routing elements in angular with corresponding controllers.
nodeTodo.config(function($routeProvider) {
 
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
    	.when('/done', {
			templateUrl: 'pages/main.html',
			controller: 'doneController'
		})
    	.when('/active', {
			templateUrl: 'pages/main.html',
			controller: 'activeController'
		})
 
		.otherwise({redirectTo: '/'});
});
