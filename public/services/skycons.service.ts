"use strict";
import * as angular from 'angular';

class SkyconsService {
    constructor(private $window: angular.IWindowService) { }

    public skycons = new this.$window.Skycons({ color: "grey" });
}

angular.module('app')
    .service('SkyconsService', SkyconsService);