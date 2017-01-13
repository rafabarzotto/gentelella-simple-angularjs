angular.module('app.login', ['lbServices', 'angularSpinner'])
    .controller('LoginCtrl', function($scope, User, $location, usSpinnerService, $rootScope) {

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
            $scope.startSpin();
            $scope.loginResult = User.login({
                    include: 'user',
                    rememberMe: $scope.loginData.rememberMe
                }, $scope.loginData,
                function() {
                    $scope.stopSpin();
                    var next = $location.nextAfterLogin || '/home';
                    $location.nextAfterLogin = null;
                    $location.path(next);
                },
                function(err) {
                    $scope.stopSpin();
                    $scope.showAlert(err.statusText, err.data.error.message);
                    console.log("ERRO");
                }
            );
        };

        $scope.goToRegister = function() {
            $location.path('/register');
        };

        $scope.startSpin = function() {
            if (!$scope.spinneractive) {
                usSpinnerService.spin('spinner-1');
            }
        };

        $scope.stopSpin = function() {
            if ($scope.spinneractive) {
                usSpinnerService.stop('spinner-1');
            }
        };

        $scope.spinneractive = false;

        $rootScope.$on('us-spinner:spin', function(event, key) {
            $scope.spinneractive = true;
        });

        $rootScope.$on('us-spinner:stop', function(event, key) {
            $scope.spinneractive = false;
        });

    });