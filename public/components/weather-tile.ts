"use strict";

import * as angular from 'angular';

class Controller {
    constructor(private SkyconsService: any, private $timeout: angular.ITimeoutService) { }
    time: number
    icon: string

    $onInit() {
        this.$timeout(() => {
            if (this.time && this.icon) this.SkyconsService.skycons.add(this.time && this.time.toString() || '', this.icon);
        })
    }

    $onChanges() {
        if (this.time && this.icon) this.SkyconsService.skycons.set(this.time && this.time.toString() || '', this.icon);
    }
}

Controller.$inject = ['SkyconsService', '$timeout'];

const WeatherTile = {
    bindings: {
        temperature: '<',
        feelsLike: '<',
        icon: '<',
        summary: '<',
        time: '<',
        temperatureHigh: '<',
        temperatureLow: '<',
        small: '@'
    },
    controller: Controller,
    template: `<section ng-if="$ctrl.summary">
                    <div>
                        <h3>{{$ctrl.time * 1000 | date: 'EEE MMM d' }}</h3>
                        <h1 ng-if="$ctrl.temperature">{{$ctrl.temperature}} &#176;F</h1>
                        <h3>{{$ctrl.temperatureHigh}} &#176;F/{{$ctrl.temperatureLow}}&#176;F</h3>
                        <h3>{{$ctrl.summary}}</h3> 
                    </div>
                    <canvas id="{{$ctrl.time}}" height="{{$ctrl.small && '100px'}}" width="{{$ctrl.small && '100px'}}"></canvas>
                </section>`,
};

export default WeatherTile;