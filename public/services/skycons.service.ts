"use strict";
import * as angular from 'angular';

class SkyconsService {
    constructor(private $window: angular.IWindowService) { }

    public skycons = new this.$window.Skycons({ color: "grey" });
}

SkyconsService.$inject = ['$window'];

export default SkyconsService;