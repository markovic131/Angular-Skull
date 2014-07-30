'use strict';

/* Controllers */

var cdAppControllers = angular.module('cdApp.controllers', []);

cdAppControllers.controller('HomeController', ['$scope', function($scope) {

    $scope.pageTitle = 'Home Page';

}]);

cdAppControllers.controller('AboutController', ['$scope', function($scope) {

    $scope.pageTitle = 'About Page';

}]);
