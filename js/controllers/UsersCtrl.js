'use strict';

angular.module('app.users', ['lbServices'])
    .controller('UsersCtrl', function($scope, User, $state) {

        $scope.users = User.find(
            function(list) {
                /* success */
            },
            function(errorResponse) {
                /* error */
            }
        );

    })

.controller('UsersCtrlEdit', function($scope, User, $state, $stateParams, $sessionStorage) {

    $scope.usersEdit = User.findById({
            id: $stateParams.id
        },
        function(response) {
            /* success */
        },

        function(errorResponse) {
            /* error */
        }
    );

    $scope.routes = ['/users', '/teste', '/dash', '/naosei'];

    $scope.selection = User.findById({
            id: $stateParams.id,
            filter: {
                fields: 'routes'
            }
        },
        function(response) {
            /* success */
        },

        function(errorResponse) {
            /* error */
        }
    );

    $scope.toggleSelection = function toggleSelection(route) {
        var idx = $scope.selection.routes.indexOf(route);

        // is currently selected
        if (idx > -1) {
            $scope.selection.routes.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.selection.routes.push(route);
        }
    };

    $scope.save = function toggleSelection(usersEdit) {
        usersEdit.routes = $scope.selection.routes;
        console.log(usersEdit);
        // User.update({
        //         id: $stateParams.id
        //     }, usersEdit,
        //     function(res) {
        //         console.log("OK");
        //     },
        //     function(err) {
        //         console.log("ERRO");
        //     });

    };


});