(function () {
    'use strict';

    angular
        .module('photoApp.photo')
        .controller('photoCtrl', photoCtrl)
    //.config(['$routeProvider', function ($routeProvider) {
    //    $routeProvider
    //        .when('/photo', {
    //            templateUrl: 'photo/photo.tmpl.html',
    //            controller: 'photoCtrl',
    //            controllerAs: 'photoVm'
    //        });
    //}]);
    photoCtrl.$inject = ['$scope', '$http', '$rootScope','$timeout'];

    function photoCtrl($scope, $http, $rootScope, $timeout) {
        $rootScope.title = "גלריית תמונות";

        var vm = this;
        vm.images = [];

        activate();

        function activate() {
            for (var i = 1; i <= 10; i++) {
                vm.images.push({
                    src: i +'.jpg',
                    title: 'pic' +i
                })
            }
        }
    }
})();
