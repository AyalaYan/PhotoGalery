(function () {
    'use strict';

    angular
        .module('photoApp.service')
        .factory('loginService', []);

    /*
     * שימוש בסרביס 
     * הוא עבור פונקציות כלליות
     * ועבור Model:
     * קריאות לServer
     * יתבצעו בסרביס
     */
    loginService.$inject = ['$http', '$q'];

    function loginService($http, $q) {
        var service = {
            postData: function (user) {
                /*
                 * defered: 
                 * זה מתבצע עבור פעולה 
                 * אסינכרונית
                 * כדי שנחזיר למשתמש תשובה
                 * והוא יוכל להמשיך הלאה בקוד
                 * ואז כסיימנו לרוץ
                 * נעשה 
                 * defered.resolve(objToReturn);
                 * ואז תופעל הפונקציה 
                 * then
                 * של המשתמש
                 * דוגמא לאיך זה עובד:
                 * 
                 */
                var defered = $q.defer();
                /*
                 * זוהי פעולת 
                 * ajax
                 * של אנגולר
                 * אם הפעולה הצליחה מה שחוזר יתבצע בפונקציה הראשונה 
                 * ששלחנו ב then
                 * אחרת 
                 * הפונקציה השניה תקרא
                 */
                $http.post("/api/login", user).then(
                    function success(data) {
                        defered.resolve( data.data);
                    }, function error(error) {
                        defered.resolve(false);
                    });
                return defered.promise;
            }
        };

        return service;


    }
})();