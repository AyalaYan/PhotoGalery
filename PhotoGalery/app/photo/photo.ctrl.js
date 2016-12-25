angular.module('photoApp.login')
.controller('photoCtrl', ['$scope', '$rootScope','$timeout','$log', photoCtrl]);

function photoCtrl($scope, $rootScope, $timeout,$log) {
    $scope.clickMe = function () {
        $scope.watchers= $rootScope.countWatchers();
        console.log("clicked/n");
    }
   

    $rootScope.title = 'מסך פוטו ';
    var vm = this;
    vm.images = [];
    vm.length = 10;
    vm.currentIndex = 3;

    vm.alertMe = function myfunction() {
        alert(vm.currentIndex);
    }
 

    activate();

    function activate() {
        for (var i = 1; i <= vm.length; i++) {
            vm.images.push({
                title: 'Pic ' + i,
                src: i + '.jpg',
            });
        }
        vm.images2=  angular.copy(vm.images);
       // sliderFunc();
        //changeCurrentIndex();
    }
}
