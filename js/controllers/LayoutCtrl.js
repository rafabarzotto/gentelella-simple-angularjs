'use strict';

angular.module('app.layout', ['lbServices'])
	.controller('LayoutCtrl', function($scope, User, $location, notificationService, $sessionStorage) {

		$scope.currentUser = User.getCurrent();
		$sessionStorage.currentUser = User.getCurrent()

		$scope.logout = function() {
			User.logout(function() {
				$location.path('/login');
			});
		}


		// User.findById({
		// 		id: User.getCurrentId()
		// 	},
		// 	function(response) {
		// 		console.log(response);
		// 		$localStorage.routes = response.routes
		// 	},
		// 	function(errorResponse) { /* error */ }
		// );


	});