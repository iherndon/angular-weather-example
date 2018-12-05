"use strict";
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import SkyconsService from '../services/skycons.service';
@Component({
    selector: 'weather-tile',
    template: `<section *ngIf="summary">
                    <div>
                        <h3>{{time * 1000 | date: 'EEE MMM d' }}</h3>
                        <h1 *ngIf="temperature">{{temperature}} &#176;F</h1>
                        <h3>{{temperatureHigh}} &#176;F/{{temperatureLow}}&#176;F</h3>
                        <h3>{{summary}}</h3> 
                    </div>
                    <canvas id="{{time}}" [height]="small ? 100: 300" [width]="small ? 100: 300"></canvas>
                </section>`
})

export class WeatherTile implements OnInit, OnChanges {
    @Input() time: number;
    @Input() icon: string;
    @Input() temperature: number;
    @Input() temperatureHigh: number;
    @Input() temperatureLow: number;
    @Input() small: boolean;
    @Input() summary: string;
    @Input() feelsLike: number;
    constructor(private skycons: SkyconsService) { }


    ngOnInit() {
        setTimeout(() => {
            if (this.time && this.icon) this.skycons.skycons.add(this.time && this.time.toString() || '', this.icon)
        });
    }

    ngOnChanges() {
        setTimeout(() => {
            if (this.time && this.icon) this.skycons.skycons.set(this.time && this.time.toString() || '', this.icon)
        });
    }
}
