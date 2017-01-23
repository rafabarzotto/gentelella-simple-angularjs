'use strict';

angular.module('app.users', ['lbServices'])
    .controller('UsersCtrl', function($scope, User, $state) {

        $scope.users = User.find(
            function(res) {
                /* success */
            },
            function(err) {
                /* error */
            }
        );

    })

.controller('UsersCtrlEdit', function($scope, User, $state, $stateParams, $sessionStorage, notificationService) {

    $scope.usersEdit = User.findById({
            id: $stateParams.id
        },
        function(res) {
            /* success */
        },

        function(err) {
            /* error */
        }
    );

    $scope.routes = ['/users', '/teste', '/dash', '/naosei', '/preco'];

    $scope.selection = User.findById({
            id: $stateParams.id,
            filter: {
                fields: 'routes'
            }
        },
        function(res) {
            /* success */
        },

        function(err) {
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
        User.updateAll({
                where: {
                    id: $stateParams.id
                }
            }, usersEdit,
            function(res) {
                $sessionStorage.currentUser.routes = $scope.selection.routes;
                notificationService.success('Update Success!');
            },

            function(err) {
                notificationService.error(err.statusText + ' - ' + err.data.error.message);
            }
        );



    };


});