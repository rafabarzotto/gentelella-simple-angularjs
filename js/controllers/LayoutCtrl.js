angular.module('app.layout', ['lbServices'])
    .controller('LayoutCtrl', function($scope, User, $location) {

        $scope.currentUser = User.getCurrent();

    });