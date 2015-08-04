angular.module('jessedahldotcom', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'sections/home', 'jdHeader', 'appSettings', 'resume', 'spinner']);

angular.module('jessedahldotcom').config(function($routeProvider, pathConstants) {

    /* Add New Routes Above */
    //$routeProvider.when('/home', {
    $routeProvider.when(pathConstants.HOME, {
        controller: 'HomeController',
        templateUrl: 'sections/home/home.html'
    });

    $routeProvider.when(pathConstants.SPINNER, {
        controller: 'SpinnerController',
        templateUrl: 'sections/spinner/spinner.html'
    });

    $routeProvider.when(pathConstants.RESUME, {
        controller: 'ResumeController',
        templateUrl: 'sections/resume/resume.html'
    });

    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('jessedahldotcom').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
