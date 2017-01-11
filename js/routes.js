 angular.module('app').config(function($stateProvider, $urlRouterProvider) {

 	var viewsPrefix = 'views/';

 	$stateProvider

 		.state('index', {
 		url: "/",
 		templateUrl: viewsPrefix + "home.html",
 		// controller: 'MasterCtrl',
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

 	.state('tables', {
 		url: "/tables",
 		templateUrl: viewsPrefix + "tables.html",
 		data: {
 			pageTitle: 'Tables'
 		}
 	});

 	// caminho inicial/
 	$urlRouterProvider.otherwise("/");


 });