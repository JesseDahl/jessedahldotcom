(function() {
    'use strict';

    angular.module('jdHeader', ['ui.bootstrap'])
        .directive("jdHeader", headerDirective);

    function headerDirective(pathConstants, $location) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {},
            templateUrl: 'components/jd-header/jd-header.html',
            controller: headerController,
            controllerAs: "vm",
            bindToController: true
        };

        function headerController() {
            var vm = this;

            vm.navbarCollapsed = true;

            vm.toggle = toggle;

            vm.pathConstants = pathConstants;

            function toggle() {
                vm.navbarCollapsed = !vm.navbarCollapsed;
            }
        }
    }

})();


