"use strict";

{ 
    angular
        .module('app')
        .service('ApiService', function($http, LocationService){
            const baseUrl = 'https://api.darksky.net/forecast/API_SECRET_KEY/';
            const exclude = '?exclude=minutely,hourly,alerts';

            const service = {
                getWeather() {
                    return LocationService.getCurrentPosition()
                        .then(({latitude, longitude}) => $http.get(`/proxy/${baseUrl}${latitude},${longitude}${exclude}`));
                },
            };

            Object.assign(this, service);
        });
}