"use strict";

import * as angular from 'angular';
import App from './components/app';
import WeatherTile from './components/weather-tile';
import ApiService from './services/api.service';
import LocationService from './services/location.service';
import SkyconsService from './services/skycons.service';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .component('app', App)
    .component('weatherTile', WeatherTile)
    .service('ApiService', ApiService)
    .service('LocationService', LocationService)
    .service('SkyconsService', SkyconsService);

export default MODULE_NAME;