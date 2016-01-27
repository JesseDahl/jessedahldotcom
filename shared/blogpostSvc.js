(function() {
    'use strict';

    angular.module("blogpostSvc", [])
        .factory('blogpostSvc', ['$http', blogpostSvc]);

    function blogpostSvc($http) {
        var wsRoot = "content/blogposts/";
        return {
            get: get
        };

        function get(id) {
            return $http.get(wsRoot + id + ".html");
        }
    }
})();
