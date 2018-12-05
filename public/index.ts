import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App } from './components/app';
import { WeatherTile } from './components/weather-tile';
import ApiService from './services/api.service';
import LocationService from './services/location.service';
import SkyconsService from './services/skycons.service'

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        App,
        WeatherTile
    ],

    providers: [
        ApiService,
        LocationService,
        SkyconsService
    ],
    bootstrap: [App]
})
export class AppModule { }