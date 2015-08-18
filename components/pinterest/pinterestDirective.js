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
            controller: pinterestBoxController,
            controllerAs: "vm",
            bindToController: true
        };
    }

    function pinterestBoxController($timeout) {
        /* jshint validthis: true */
        var vm = this;

        $timeout(function() {
            $(".pin-box").css("maxWidth", vm.maxWidth);
        });
    }
})();
