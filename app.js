angular.module('jessedahldotcom',
    ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'jdHeader', 'components.pinterest', 'appSettings', 'sections',
     'ngSanitize', 'appconstants', 'gist', 'ngSanitize', 'blogpostSvc', 'trustAsHtmlFilter']);

angular.module('jessedahldotcom').config(function($routeProvider, $locationProvider, pathConstants) {

    $routeProvider.when('portfolio',{templateUrl: 'sections/portfolio/portfolio.html'});
    /* Add New Routes Above */


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

    $routeProvider.when(pathConstants.BLOG + "/:id", {
        controller: 'BlogController',
        templateUrl: 'sections/blog/blog.html'
        /*templateUrl: function($routeParams) {
            return 'content/blogposts/' + $routeParams.id + ".html";
        }*/
    });

    $routeProvider.when(pathConstants.BLOG, {
        controller: 'BlogController',
        templateUrl: 'sections/blog/blog.html'
    });

    $routeProvider.when(pathConstants[404], {
        templateUrl: 'sections/404/404.html'
    });

    $routeProvider.otherwise({redirectTo:'/404'});

    /*$locationProvider.html5Mode(true);*/

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
