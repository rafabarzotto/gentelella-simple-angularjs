 angular.module('app').config(function($stateProvider, $urlRouterProvider, $httpProvider) {

 	var viewsPrefix = 'views/';

 	$stateProvider

 		.state('home', {
 		url: "/home",
 		templateUrl: viewsPrefix + "layout.html",
 		controller: 'LayoutCtrl',
 		data: {
 			pageTitle: 'Home'
 		}
 	})

 	.state('users', {
 		url: "/users",
 		templateUrl: viewsPrefix + "users.html",
 		data: {
 			pageTitle: 'Users'
 		}
 	})

 	.state('login', {
 		url: "/login",
 		controller: 'LoginCtrl',
 		templateUrl: viewsPrefix + "login.html",
 		data: {
 			pageTitle: 'Login'
 		}
 	})

 	 	.state('register', {
 		url: "/register",
 		controller: 'RegisterCtrl',
 		templateUrl: viewsPrefix + "register.html",
 		data: {
 			pageTitle: 'Register'
 		}
 	})

 	.state('tables', {
 		url: "/tables",
 		templateUrl: viewsPrefix + "tables.html",
 		data: {
 			pageTitle: 'Tables'
 		}
 	});

 	// caminho inicial/
 	$urlRouterProvider.otherwise("/login");

 	$httpProvider.interceptors.push(function($q, $location) {
 		return {
 			responseError: function(rejection) {
 				console.log("Redirect");
 				if (rejection.status == 401 && $location.path() !== '/login' && $location.path() !== '/register') {
 					$location.nextAfterLogin = $location.path();
 					$location.path('/login');
 				}
 				return $q.reject(rejection);
 			}
 		};
 	});


 });