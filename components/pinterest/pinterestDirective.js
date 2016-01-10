(function() {
    'use strict';

    angular.module('components.pinterest', [])
        .directive('pinterestBox', pinterestBox);

    pinterestBox.$inject = ['$timeout'];

    function pinterestBox() {
        return {
            restrict: 'E',
            scope: {
                boxes: "=",
                maxWidth: "@"
            },
            templateUrl: 'components/pinterest/pinterest.html',
            compile: function(element, attrs) {
                $(".pin-box").css("maxWidth", attrs.maxWidth);
            }
        };
    }
})();
