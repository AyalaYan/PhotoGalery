(function () {
    'use strict';
    /*
     * בדף זה אנחנו מגדירים את ה
     * route 
     * של האפליקציה
     * זה אומר שבמקום שיהיה דירקטיב בשם
     * ng-view 
        הדיירקטיב יוצר אירוע שמנטר את פעולת ה
        URL
        בכל שינוי של ה
        URL
        הוא משווה מול ההגדרות שנתנו לו ב
        $routeProvider
        אם הוא מוצא הוא
        מכניס את התוכן של הטימפלייט לתוך הדיב הזה
        וגם הדיב הזה כעת יהיה שייך לכונטרולר שנתנו
        אם הוא לא מוצא הוא הולך לברירת מחדל שזה
        otherwise
        פעולה זו נקראית שימוש ב
        single page application
      */
    /*
     * שימו לב:
     * יש כאלו שמגדירים דף ראוטינג עבור ההגדרות האלו
     * אבל יש כאלו שיוצרים כונפיג נפרד 
     * עבור כל מודול
     * ושם מגדירים את הראוט של אותו מודול בלבד
     * otherwiseואת ה
     * בלבד מגדירים במודול הראשי
     * 
     * אנחנו יצרנו דף נפרד והגדרנו הכל במודול הראשי.
     */
    angular.module('photoApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.tmpl.html',
                controller: 'loginCtrl',
                controllerAs: 'loginVm'
            })
            .when('/photo', {
                templateUrl: 'photo/photo.tmpl.html',
                controller: 'photoCtrl',
                controllerAs: 'photoVm'
            })
           .otherwise({ redirectTo: '/login' });
    }]);
})();