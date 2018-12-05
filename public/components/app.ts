"use strict";

import { Component, OnInit } from '@angular/core';
import ApiService from '../services/api.service';
import SkyconsService from '../services/skycons.service';

interface Day {
    summary: string,
    icon: string,
    temperatureHigh: number,
    temperatureLow: number,
    time: number
}
interface Data {
    currently: {
        time: number,
        temperature: number,
        summary: string,
        icon: string
    },
    daily: {
        data: [Day]
    }
}
@Component({
    selector: 'app',
    template: `<div>
                    <weather-tile
                        [summary]="current.summary" 
                        [icon]="current.icon" 
                        [temperature]="current.temperature"
                        [temperatureHigh]="temperatureHigh"
                        [temperatureLow]="temperatureLow"
                        [time]="current.time">
                    </weather-tile>
                    <section class="list">
                        <weather-tile 
                            *ngFor="let day of daily"
                            [summary]="day.summary"
                            [icon]="day.icon"
                            [temperatureHigh]="day.temperatureHigh"
                            [temperatureLow]="day.temperatureLow"
                            [time]="day.time"
                            [small]="true"
                        >
                        </weather-tile>
                    </section>
                </div>`
})

export class App implements OnInit {
    constructor(private api: ApiService, private skycons: SkyconsService) { }
    current:object = {}
    daily: any[]

    ngOnInit() {
        this.skycons.skycons.play();
        this.api.getWeather().then((obs: any) => obs.subscribe((data: Data) => {
            this.current = data.currently;
            const { temperatureHigh, temperatureLow } = data.daily.data[0];
            Object.assign(this, { temperatureHigh, temperatureLow });
            this.daily = data.daily.data.slice(1);
        }));
    }

}
