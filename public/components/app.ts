"use strict";

import * as angular from 'angular';

class Controller {
    constructor(private ApiService: any, private SkyconsService: any, private $timeout: angular.ITimeoutService) { }
    current: any
    daily: any

    $onInit() {
        this.SkyconsService.skycons.play();
        this.ApiService.getWeather().then((result: any) => {
            this.$timeout(() => {
                this.current = result.data.currently;
                const { temperatureHigh, temperatureLow } = result.data.daily.data[0];
                Object.assign(this, { temperatureHigh, temperatureLow });
                this.daily = result.data.daily.data.slice(1);
            });

        });
    }

}

Controller.$inject = ['ApiService', 'SkyconsService', '$timeout'];

const App = {
    controller: Controller,
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
};

export default App;