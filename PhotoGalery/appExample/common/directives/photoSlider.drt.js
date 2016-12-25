(function() {
    'use strict';

    angular
        .module('appPhoto.directives')
        .directive('photoSlider', slider);

    slider.$inject = ['$window'];
    
    function slider ($window) {
        // Usage:
        //     <slider></slider>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();