(function() {
    'use strict';

    angular.module('trustAsHtmlFilter', [])
        .filter('trustAsHtml', ['$sce', trustAsHtmlFilter]);

    function trustAsHtmlFilter($sce) {
        return function (text) {
            console.log(text);
            return $sce.trustAsHtml(text);
        };
    }
})();
