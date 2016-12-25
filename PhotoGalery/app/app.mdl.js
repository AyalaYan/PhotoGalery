(function () {
    'use strict';
    angular.module('photoApp.login', []);
    angular.module('photoApp.photo', []);
    angular.module('photoApp.services', []);
    angular.module('photoApp.filters', []);
    angular.module('photoApp.directives', []);
    angular.module('photoApp', [
        // Angular modules
        'ngAnimate',
        'ngRoute',

        // Custom modules
        'photoApp.login',
        'photoApp.photo',
        // 3rd Party Modules
        'photoApp.services',
        'photoApp.filters',
        'photoApp.directives'

    ])
        //.config(['imageUrlServiceProvider',function(imageUrlServiceProvider){
        //    imageUrlServiceProvider.changeRootUrl('coo');
        //}])
        //.value('imageUrlService', 'common/images/')
    .run(['$rootScope', '$filter', function ($rootScope, $filter) {
         $rootScope.title = "גלרית תמונות";

        /*
          לפילטר יש 3 צורות:
        1. Pipe 
        הגדרת הפילטר בhtml עצמו
        2. לעשות 
        inject 
        לפילטר עם שם הפילטר+ מילה שמורה:
        'Filter'
        3. להשתמש בסרביס
        $filter
        */

        //var Chrysanthemum = {
         //    src: imageUrl +'Chrysanthemum.jpg',
         //    name: 'Chrysanthemum'
         //}

         //var Chrysanthemum = {
         //    src: imageUrlFilter('Chrysanthemum.jpg') ,
         //    name: 'Chrysanthemum'
        //}
       //  $rootScope.ChrysanthemumImage = imageUrlService.images.Chrysanthemum;
        //alert(1);



         $rootScope.countWatchers = function () {
             var q = [$rootScope], watchers = 0, scope;
             while (q.length > 0) {
                 scope = q.pop();
                 if (scope.$$watchers) {
                     watchers += scope.$$watchers.length;
                 }
                 if (scope.$$childHead) {
                     q.push(scope.$$childHead);
                 }
                 if (scope.$$nextSibling) {
                     q.push(scope.$$nextSibling);
                 }
             }
             window.console.log(watchers);
             return watchers;
         };



         $rootScope.currentDate = $filter('date')(new Date(), "dd/MM/yyyy");
         $rootScope.currentDate = new Date();
     }]);
})();
