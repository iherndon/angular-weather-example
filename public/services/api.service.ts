"use strict";

import * as angular from 'angular';


class ApiService {
    constructor(private $http: angular.IHttpService, private LocationService: any) { }

    private baseUrl = 'https://api.darksky.net/forecast/API_SECRET_KEY/';

    private exclude = '?exclude=minutely,hourly,alerts';

    public getWeather() {
        return this.LocationService.getCurrentPosition()
            .then(({ latitude, longitude }: any) => this.$http.get(`/proxy/${this.baseUrl}${latitude},${longitude}${this.exclude}`));
    }
}


angular
    .module('app')
    .service('ApiService', ApiService);