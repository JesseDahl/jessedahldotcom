(function() {
    'use strict';

    angular.module('home', []);

    angular.module('home').controller('HomeController', HomeController);

    function HomeController($scope, version) {
        $scope.config = version;
        console.log(version);
        // TODO: fetch this data from a service
        $scope.boxes = [{
            imgSrc: "images/audienceview/audience-view.jpg",
            title: "Responsive design at Experian",
            synopsis: "Some thoughts on my mobile-first responsive design process",
            blogUrl: "blog/2"
        },{
            imgSrc: "images/spinner.jpg",
            title: "D3.js Spinning Wheel",
            synopsis: "Don't know where to go for lunch? Try this.",
            blogUrl: "blog/1"
        },{
            imgSrc: "images/dst/dst-prod-devices.jpg",
            title: "Responsive Design at Farmers Insurance",
            synopsis: "My work on the Distribution Survey Tool at Farmers",
            blogUrl: "blog/3"
        },{
            imgSrc: "images/d3rink/rink.jpg",
            title: "A D3.js based NHL rink",
            synopsis: "Work in Progress: Building a D3.js widget that plots shot location data onto the rink",
            blogUrl: "blog/5"
        }];

    }
})();
