"use strict";

{
    angular.module('app')
        .component('weatherTile', {
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
            controller (SkyconsService, $timeout) {
                const $ctrl = this;
                $ctrl.$onInit = function(){
                    $timeout(() => {
                        if ($ctrl.time && $ctrl.icon) SkyconsService.skycons.add($ctrl.time && $ctrl.time.toString() || '', $ctrl.icon);
                    })
                }

                $ctrl.$onChanges = function(changes) {
                    if ($ctrl.time && $ctrl.icon) SkyconsService.skycons.set($ctrl.time && $ctrl.time.toString() || '', $ctrl.icon);
                }
            },
            template:  `<section ng-if="$ctrl.summary">
                            <div>
                                <h3>{{$ctrl.time * 1000 | date: 'EEE MMM d' }}</h3>
                                <h1 ng-if="$ctrl.temperature">{{$ctrl.temperature}} &#176;F</h1>
                                <h3>{{$ctrl.temperatureHigh}} &#176;F/{{$ctrl.temperatureLow}}&#176;F</h3>
                                <h3>{{$ctrl.summary}}</h3> 
                            </div>
                            <canvas id="{{$ctrl.time}}" height="{{$ctrl.small && '100px'}}" width="{{$ctrl.small && '100px'}}"></canvas>
                        </section>`,
        });
}