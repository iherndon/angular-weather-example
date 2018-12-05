"use strict";

const angular = require('angular');

angular
    .module('app')
    .component('app', {
        controller (ApiService, SkyconsService, $timeout) {
            const $ctrl = this;
            $ctrl.$onInit = function() {
                SkyconsService.skycons.play();
                ApiService.getWeather().then(result => {
                    $timeout(() => {
                        $ctrl.current = result.data.currently;
                        const { temperatureHigh, temperatureLow } = result.data.daily.data[0];
                        Object.assign($ctrl, { temperatureHigh, temperatureLow });
                        $ctrl.daily = result.data.daily.data.slice(1);
                    });
                    
                });
            }
            
            
        },
        template: `<div>
                        <weather-tile
                            summary="$ctrl.current.summary" 
                            icon="$ctrl.current.icon" 
                            temperature="$ctrl.current.temperature"
                            temperature-high="$ctrl.temperatureHigh"
                            temperature-low="$ctrl.temperatureLow"
                            time="$ctrl.current.time">
                        </weather-tile>
                        <section class="list">
                            <weather-tile 
                                ng-repeat="day in $ctrl.daily"
                                summary="day.summary"
                                icon="day.icon"
                                temperature-high="day.temperatureHigh"
                                temperature-low="day.temperatureLow"
                                time="day.time"
                                small="true"
                            >
                            </weather-tile>
                        </section>
                    </div>`
})