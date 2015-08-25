(function() {
    'use strict';

    angular.module('home', []);

    angular.module('home').controller('HomeController', HomeController);

    function HomeController($scope, version) {
        $scope.config = version;
        console.log(version);
        // TODO: fetch this data from a service
        $scope.boxes = [{
            imgSrc: "images/spinner.jpg",
            title: "a D3js based Spinning wheel.",
            synopsis: "Add 'slices' to the wheel and spin it to find out which item will randomly get selected. " +
                      "At work we use this to find out where to go to lunch.",
            blogUrl: "blog/1"
        },{
            imgSrc: "images/audienceview/audience-view.jpg",
            title: "Samples of my work using mobile-first responsive design processes",
            synopsis: "Some thoughts on the process I used to design a landing/login/home page for http://www.audience-view.com " +
            "that was responsive",
            blogUrl: "#/blog/2"
        },{
            imgSrc: "images/dst/dst-prod-devices.jpg",
            title: "Farmers Insurance Distribution Survey Tool (Mobile View)",
            synopsis: "A survey tool web application for Farmers' district managers. A responsive site built using " +
            "Bootstrap, jQuery and the CanJS JavaScript MVC framework",
            blogUrl: "blog/3"
        },{
            imgSrc: "images/dst/dst-prod-template.jpg",
            title: "Farmers Insurance Distribution Survey Tool (Large Viewport)",
            synopsis: "A survey tool web application for Farmers' district managers. A responsive site built using " +
            "Bootstrap, jQuery and the CanJS JavaScript MVC framework",
            blogUrl: "blog/4"
        },{
            imgSrc: "images/d3rink/rink.jpg",
            title: "A D3js based NHL rink drawn in SVG",
            synopsis: "Here's a D3 drawn NHL rink. http://plnkr.co/edit/8yknEGn1DXB1ns5DGCN1?p=preview." +
            " Eventually I will add the ability to plot shot locations onto the rink",
            blogUrl: "blog/5"
        }];

    }
})();
