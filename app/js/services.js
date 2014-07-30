'use strict';

/* Services */


// Demonstrate how to register services
var cdAppServices = angular.module('cdApp.services', []);

// In this case it is a simple value service.
cdAppServices.value('version', '0.25');
