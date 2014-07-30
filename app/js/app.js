'use strict';


// Declare app level module which depends on filters, and services
var cdApp = angular.module('cdApp', ['ngRoute','cdApp.filters','cdApp.services','cdApp.directives','cdApp.controllers']);

cdApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

    //Routes
    $routeProvider.when(
        '/home', {
            templateUrl: 'partials/index.html',
            controller: 'HomeController'
        }).when(
        '/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        }).when(
        '/', { // Root of the website structure
            templateUrl: 'partials/index.html',
            controller: 'HomeController'
        }).otherwise({ redirectTo: '/' });

    //Turn on HTML5 mode of routing
    //$locationProvider.html5Mode(true);
}]);
