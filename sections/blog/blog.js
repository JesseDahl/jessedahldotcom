(function() {
    'use strict';

    angular.module('blog', []);

    angular.module('blog').controller('BlogController', BlogController);

    function BlogController($scope) {

        $scope.blog = {};
        $scope.blog.title = "hi";
    }
})();
