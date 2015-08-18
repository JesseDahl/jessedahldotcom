(function() {
    'use strict';

    angular.module('home', []);

    angular.module('home').controller('HomeController', HomeController);

    function HomeController($scope) {

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
            synopsis: "Some thoughts on the process I used to design a landing/login/home page for audience-view.com " +
            "that was responsive",
            blogUrl: "blog/2"
        },{
            imgSrc: "images/spinner.jpg",
            title: "a D3js based Spinning wheel.",
            synopsis: "Add 'slices' to the wheel and spin it to find out which item will randomly get selected. " +
            "At work we use this to find out where to go to lunch.",
            blogUrl: "blog/1"
        },{
            imgSrc: "images/audienceview/audience-view.jpg",
            title: "Samples of my work using mobile-first responsive design processes",
            synopsis: "Some thoughts on the process I used to design a landing/login/home page for audience-view.com " +
            "that was responsive",
            blogUrl: "blog/2"
        },{
            imgSrc: "images/spinner.jpg",
            title: "a D3js based Spinning wheel.",
            synopsis: "Add 'slices' to the wheel and spin it to find out which item will randomly get selected. " +
            "At work we use this to find out where to go to lunch.",
            blogUrl: "blog/1"
        },{
            imgSrc: "images/audienceview/audience-view.jpg",
            title: "Samples of my work using mobile-first responsive design processes",
            synopsis: "Some thoughts on the process I used to design a landing/login/home page for audience-view.com " +
            "that was responsive",
            blogUrl: "blog/2"
        }];

    }
})();
