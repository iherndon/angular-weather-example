"use strict";
const angular = require('angular');
angular.module('app')
    .service('SkyconsService', function($window){
        this.skycons = new $window.Skycons({color: "grey"});
        console.log(this.skycons.add);
    });