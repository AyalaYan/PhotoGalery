(function () {
    'use strict';


    /*
     * זהו דף לוגין כונטרולר
     * בוא אנחנו מגדירים את הקונטרולר שלנו
     * טווח ההכרה של הכונרולר נמצא בדיב שבו הגדרנו את הכונטרולר בדף.
     * הכונטרולר חייב להיות תחת 
     * ng-app
     * אחרת אנגולר לא תתיחס אליו
     */

    /*
     * את השם 
     * photoApp.login
     * אני החלטתי לקרא אפשר לקרא למודול בכל שם
     * הסיבה שקראתי לו ככה זה כדי שיהיה מובן למי שיקרא אחרי 
     * את ההקשר של המודול הזה
     * מי שקורא את השם מבין שהמודול הזה הוא מודול 
     * login
     * ונמצא תחת מודול 
     * photoApp
     */
    angular
        .module('photoApp.login')
        .controller('loginCtrl', loginCtrl);
    //.config(['$routeProvider', function ($routeProvider) {
    //    $routeProvider
    //        .when('/login', {
    //            templateUrl: 'login/login.tmpl.html',
    //            controller: 'loginCtrl',
    //            controllerAs: 'loginVm'
    //        });
    //}]);
    /*
     * זה נקרא פעולת
     * dependency injection
     * שזה אומר בתרגום "הזרקת תלות"
     * הרעיון הוא שבפונקציה אנחנו מבקשים את הסרביסים שאנחנו רוצים 
     * ומאחורי הקלעים אנגולר יודעת 
     * להתאים אותם לסרביס המתאים וליצור הצבעה אליהם
     */
    /*
     * לא חייבים לעשות מערך 
     *  inject
     * מספיק שנקרא בראש הפונקציה לסרביס המתאים ואנגולר תיצור לנו הצבעה אליו
     * הסיבה שאנחנו יוצרים מערך 
     * היא בשביל שאם נרצה 
     * ליצור לדף
     * min
     * כלומר לכווץ את הדף, שהמשקל שלו יהיה נמוך
     * אז הפעולה הזו משנה שמות של אוביקטים אבל היא לא משנה מחרוזות 
     * (string)
     * לכן מצאו דרך איך להתגבר על זה,ופה היגיע הרעיון של הגדרת מערך מחרוזות של  
     * הסרביסים עבור פעולת ההזרקה
     * וכך זה לא ישתנה 
     */
    /*
     * שימו לב:
     * אם מגדירים מערך אוביקטים יש להגדיר בהתאמה למה שהגדרתם בשורת הפונקציה
     * אם לא תעשו כך זה ייפול
     * שנית:
     * אם הגדרתם מערך, אתם לא חייבים להגדיר בראש הפונקציה באותו שם, אנגולר יודעת לעשות את ההתאמה לפי המערך שנתתם לה
     */

    /*
     * יש שתי דרכים להגדיר 
     * inject
     * דרך אחת היא כמו בדוגמא הזו
     * דרך שניה היא להגדיר ביצירת הקונטרולר מערך
     * שהאחרון הוא פונקצית הקונטרולר
     */
    loginCtrl.$inject = ['$scope', '$http', '$rootScope', '$location', 'loginService'];

    function loginCtrl($scope, $http, $rootScope, $location, loginService) {
        /*
         * זו צורה של שימוש במשתנה גלובלי
         * $rootScope
         * שאפשר לקרא לו מכל קונטרולר ולשנות אותו
         * אגב, תחת אותו קונטרולר אם ב
         * html
         * קראתי למשתנה 
         * אנגולר תחפש אותו בסקופ של הקונטרולר
         * אם היא לא תמצא היא תלך ל
         * $rootScope
         * ותחפש שם
         */
        $rootScope.title = "כניסת משתמש";
        /*
         * זו צורה של שימוש ב
         * controllerAs
         * מגדירים את כל המשתנים שלנו תחת 
         * this 
         * ואם הגדרתי 
         * בhtml
         * אחרי שם הכונטרולר את הביטוי 
         * as 
         * לדוגמא:
         * ng-controller= "loginCtrl as loginVM"
         * אנגולר תדע להוסיף את האוביקט 
         * this
         * של הכונטרולר  לתוך הסקופ שלה ותקרא לשם שלה כמו שבקשנו לקרא לה
         * לדוגמא בדוגמא למעלה
         * $scope.loginVM =this;
         */
        /*
         * ההמצלה היום היא להשתמש ב
         * controllerAs
         * משתי סיבות:
         * 1. יהיה אפשר לקרא למשתנים מקונטרולר אחר (האב כמובן) בלי בעיה
         * 2. באנגולר 2 משתמשים בתחביר הזה אז כדאי שנתרגל לזה מעכשיו
         */
        var vm = this;
        vm.login = function () {
            /*
             * זה דוגמא לשימוש בסרביס שאנחנו יצרנו
             */
            loginService.postData(vm.user).then(function (data) {
                vm.user.success = data;
                if (vm.user.success) {
                    vm.spSuccess = 'משתמש נכנס בהצלחה';

                           function deferedObject() {
            var self = this;
            self.resolve = function (data) {
                self.onSuccess(data);
            },
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
                then: function (doOnSucces) {
                    self.onSuccess = doOnSucces;
                },
                error: function (doOnError) {
                    self.onError = doOnError;
                }
            }
        };




                    /*
                     * שורה זו אומרת לפנות ל
                     * Url 
                     * אחר שאנחנו רוצים
                     */
                    $location.path('/photo');
                }
                else
                    vm.spSuccess = 'משתמש לא קיים';

            });
        }

 



        $scope.ctrlName = "loginCtrl";

        activate();

        /*
         * פונקצית האיתחול שבו אנחנו נבצע מה שאנחנו רוצים לעשות באיתחול 
         * הדיירקטיב
         * נהוג לשים אותה אחרונה כדי שהיא תבוצע אחרי שהגדרנו את כל המשתנים שלנו
         */
        function activate() { }
    }
})();
