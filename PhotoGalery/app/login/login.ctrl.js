var app= angular.module('photoApp.login')
.controller('loginCtrl', loginCtrl);


//loginCtrl.$inject = ['$scope', '$http', '$rootScope', '$location', '$timeout', '$q', 'loginService'];
app.controller('uuuuCtrl', ['$scope', function ($scope) {
    this.nameee = "uuuuCtrl";
}]);

function loginCtrl($scope, $http, $rootScope, $location, $timeout, $q, loginService) {
    $rootScope.title = 'מסך כניסה';
    var vm = this;

    vm.login = function () {

        loginService.postUser(vm.user).then(
            function succes(isSuccess) {
                if (isSuccess.data) {
                    vm.user.success = true;
                    vm.spSuccess = 'משתמש נכנס בהצלחה';

                    $location.path('/photo');
                }
                else {
                    vm.user.success = false;
                    vm.spSuccess = 'משתמש לא קיים';
                }
            },
            function error() {
            });

    };

    vm.tryDefer = function () {

        var defer = $q.defer();



        for (var i = 0; i < 10; i++) {
            i++;
            console.log(i);
        }
        defer.resolve("fghkj/");



        return defer.promise;

    }

    //vm.tryDefer = function () {

    //    var defer = new deferedObject();


    //    $timeout(function () {
    //        for (var i = 0; i < 10; i++) {
    //            i++;
    //            console.log(i);
    //        }
    //        defer.resolve("fghkj/");
    //    }, 1000);


    //    return defer.promise;

    //}
    vm.tryDefer().then(function (data) {
        console.log(data);
        console.log("this is then function");
    });
    function deferedObject() {
        var self = this;

        //resolve =לפתור
        self.resolve = function (data) {
            self.onSuccess(data);
        },
        //reject =לדחות
        self.reject = function (data) {
            self.onError(data);
        },
        self.onSuccess = function (data) {
            console.log("function then did not called  on promise");
        },
        self.onError = function (data) {
            console.log("function error did not called called on promise");
        },
        self.promise = {
            ///doOnSucces= type of function
            then: function (doOnSucces) {
                self.onSuccess = doOnSucces;
            },
            ///doOnError= type of function
            error: function (doOnError) {
                self.onError = doOnError;
            }
        }
    };

    vm.nameee = "loginCtrl";
    // $scope.loginVm = vm;
    console.log($scope);
}

//.controller('login2Ctrl', ['$scope', '$http', function ($scope, $http) {
//    $scope.login = function () {


//        $http.post('/api/login', $scope.user).then(
//            function fdhgfd(isSuccess) {
//                if (isSuccess.data) {
//                    $scope.user.success = true;
//                    $scope.spSuccess = 'משתמש נכנס בהצלחה';
//                }
//                else {
//                    $scope.user.success = false;
//                    $scope.spSuccess = 'משתמש לא קיים';
//                }
//            },
//            function gfh() {
//            });

//    };




//}])

//angular.module('photoApp2', [])
//.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
//    $scope.name = "photoApp2";

//}]);

//angular.bootstrap(document.getElementById("App2"), ['photoApp2']);
//angular.bootstrap(document.getElementById("photoApp"), ['photoApp']);