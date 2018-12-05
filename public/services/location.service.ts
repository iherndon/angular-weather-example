"use strict";

import * as angular from 'angular';


class LocationService {
    constructor(private $window: angular.IWindowService) { }

    public getCurrentPosition() {
        return new Promise(resolve => this.$window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => resolve({ latitude, longitude })));
    }
}

angular.module('app')
    .service('LocationService', LocationService);