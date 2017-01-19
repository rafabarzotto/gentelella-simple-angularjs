'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	var viewsPrefix = 'views/';

	$stateProvider

		.state('index', {
		url: '',
		abstract: true,
		views: {
			'': {
				templateUrl: viewsPrefix + 'layout/layout.html',
				controller: 'LayoutCtrl'
			},
			'header@index': {
				templateUrl: viewsPrefix + 'layout/header.html'
			},
			'menuLeft@index': {
				templateUrl: viewsPrefix + 'layout/menuLeft.html'
			},
			'footer@index': {
				templateUrl: viewsPrefix + 'layout/footer.html'
			}
		}
	})

	.state('index.home', {
		url: '/home',
		views: {
			'content': {
				templateUrl: viewsPrefix + 'home.html',
			}
		}
	})

	.state('index.users', {
		url: '/users',
		views: {
			'content': {
				templateUrl: viewsPrefix + 'users.html',
				controller: 'UsersCtrl'
			}
		}
	})


	.state('index.users/:id', {
		cache: false,
		url: '/users/:id',
		views: {
			'content': {
				templateUrl: viewsPrefix + 'usersEdit.html',
				controller: 'UsersCtrlEdit'
			}
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
})

.run(function(User, $location, $rootScope, notificationService, $sessionStorage) {
	//Check if User is authenticated
	if (User.getCachedCurrent() === null) {
		User.getCurrent();;
		$location.path('/home');
	};

	$rootScope.$on('$locationChangeStart', function() {
		//if user is authenticated and actual location path contais in blocked routs
		if (User.isAuthenticated() && $sessionStorage.currentUser.routes.indexOf($location.path()) != -1) {
			$location.path('/home');
			notificationService.notice('Access not authorized!');
		}
	});
});