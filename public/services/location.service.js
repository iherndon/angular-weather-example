"use strict";
{
    angular.module('app')
        .service('LocationService', function($window){
            this.getCurrentPosition = () => 
            new Promise((resolve) => $window.navigator.geolocation.getCurrentPosition(({coords: { latitude, longitude }}) => resolve({ latitude, longitude })));
            
        })
}