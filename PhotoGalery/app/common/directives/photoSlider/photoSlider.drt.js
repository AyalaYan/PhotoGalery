(function() {
    'use strict';

    angular
        .module('photoApp.directives')
        .directive('photoSlider', photoSlider);

    photoSlider.$inject = ['$log','$timeout'];
    
    function photoSlider($log, $timeout) {
        // Usage:
        //     <photo-slider></photo-slider>
        // Creates:
        // 
        var config = {
          //  restrict:'A',
            templateUrl: '/app/common/directives/photoSlider/photoSlider.tmpl.html',
            scope: {
                images: '=',
                currentIndex: '=start',
                alert: '&',
            },
            link: {
                post: function (scope, element, attrs) {

                    scope.alert();

                    scope.photoVm = {
                        images: scope.images,
                        currentIndex: scope.currentIndex?scope.currentIndex:0,

                    };
                    var vm = scope.photoVm;

                    //vm.currentIndex = 0; // Initially the index is at the first image

                    //get next or prev index
                    //IsGetNext:type bolean
                    var getNextIndex = function (IsGetNext) {
                        if (IsGetNext)
                            return vm.currentIndex < vm.images.length - 1 ? vm.currentIndex + 1 : 0;
                        else
                            return vm.currentIndex > 0 ? vm.currentIndex - 1 : vm.images.length - 1;
                    }

                    //on click on next show the next image
                    vm.next = function () {
                        vm.currentIndex = getNextIndex(true);
                        // changeCurrentIndex();
                    };

                    //on click on prev show the next image
                    vm.prev = function () {
                        vm.currentIndex = getNextIndex(false);
                        //changeCurrentIndex();
                    };
                    // $scope.$watch('photoVm.currentIndex', changeCurrentIndex)
                    scope.$watch(function () {
                        $log.debug(" fgfdsgfsdg of currentIndex", scope);
                        return vm.currentIndex;
                    },
                        changeCurrentIndex);

                    //on change CurrentIndex change the imagesSmall list
                    function changeCurrentIndex(newIndex, oldIndex) {
                        console.log("changeCurrentIndex" + vm.currentIndex);
                        scope.currentIndex = newIndex;
                        vm.images.forEach(function (image) {
                            image.visible = false; // make every image invisible
                        });

                        vm.images[vm.currentIndex].visible = true; // make the current image visible
                        vm.imagesSmall = [];

                        vm.imagesSmall.push(vm.images[getNextIndex(true)]);
                        vm.imagesSmall.push(vm.images[vm.currentIndex]);
                        vm.imagesSmall.push(vm.images[getNextIndex(false)]);

                        //if (vm.currentIndex > 3 && vm.currentIndex < 19) vm.currentIndex++;
                    }


                    var timer;
                    var sliderFunc = function () {
                        //timer = $timeout(function () {
                        //    vm.next();
                        //    timer = $timeout(sliderFunc, 5000);
                        //}, 5000);
                    };


                    scope.$on('$destroy', function () {
                        $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
                    });

                }
            }
      
        };
        return config;

        
    }

})();