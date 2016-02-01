(function() {
    'use strict';

    angular.module('blog', []);

    angular.module('blog').controller('BlogController', ['$scope', '$http', '$routeParams', 'blogpostSvc', BlogController]);

    function BlogController($scope, $http, $routeParams, blogpostSvc) {

        $scope.blog = {};
        $scope.blog.title = "hi";

        $scope.blogText = "";

        if ($routeParams.id) {
            blogpostSvc.get($routeParams.id).then(function(res) {
                $scope.blogText = res.data;
            });
        }
    }
})();
