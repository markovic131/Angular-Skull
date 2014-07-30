'use strict';

/* Directives */


var cdAppDirectives = angular.module('cdApp.directives', []);

cdAppDirectives.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);
