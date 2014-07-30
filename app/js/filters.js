'use strict';

/* Filters */

var cdAppFilters = angular.module('cdApp.filters', []);

cdAppFilters.filter('interpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);
