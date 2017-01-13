angular.module('app.login', ['lbServices'])
    .controller('LoginCtrl', function($scope, User, $location) {

        if (User.getCachedCurrent() !== null) {
            $location.path('/home');
        }

        /**
         * Currently you need to initialiate the variables
         * you use whith ng-model. This seems to be a bug with
         * ionic creating a child scope for the ion-content directive
         */
        $scope.loginData = {};
        $scope.loginData.rememberMe = false;

        /**
         * @name showAlert()
         * @param {string} title
         * @param  {string} errorMsg
         * @desctiption
         * Show a popup with the given parameters
         */
        $scope.showAlert = function(title, errorMsg) {
            console.log(title, errorMsg);
            console.log($scope.loginError);
        };

        /**
         * @name login()
         * @description
         * sign-in function for users which created an account
         */
        $scope.doLogin = function() {
            $scope.loginResult = User.login({
                    include: 'user',
                    rememberMe: $scope.loginData.rememberMe
                }, $scope.loginData,
                function() {
                    console.log("certo");
                    var next = $location.nextAfterLogin || '/home';
                    $location.nextAfterLogin = null;
                    $location.path(next);
                },
                function(err) {
                    $scope.showAlert(err.statusText, err.data.error.message);
                    console.log("ERRO");
                }
            );
        };

        $scope.goToRegister = function() {
            $location.path('/register');
        };


    });