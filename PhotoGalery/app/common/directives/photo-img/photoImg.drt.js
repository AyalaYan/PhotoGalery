/// <reference path="photoImg.drt.js" />

(function () {
    'use strict';

    angular
        .module('photoApp.directives')
        .directive('photoImg', function photosDirective($log) {
            var config = {
                restrict:'A',
                template: function (tElem, tAttr) {

                    ///$log.debug("tElem:", tElem, "tAttr:", tAttr);
                    var color = "pink";
                    if (tAttr.photoImg) color = tAttr.photoImg;
                    if (color == "green") tElem.after(color);
                    else  tElem.css("border", "1px solid " + color);

                    return '<img class="img img-rounded " ng-src="/app/common/images/{{image.src}}" />';
                   // return '../common/directives/photo-img/photoImg.template.html';
                },
                //transclude: true,
                //replace:true,
               // restrict: 'EACM'

            };
            return config;
        });

})();