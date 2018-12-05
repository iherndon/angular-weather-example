"use strict";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LocationService from './location.service';


@Injectable()
class ApiService {
    constructor(private http: HttpClient, private location: LocationService) { }

    private baseUrl = 'https://api.darksky.net/forecast/API_SECRET_KEY/';

    private exclude = '?exclude=minutely,hourly,alerts';

    public getWeather() {
        return this.location.getCurrentPosition()
            .then(({ latitude, longitude }: any) => this.http.get(`/proxy/${this.baseUrl}${latitude},${longitude}${this.exclude}`));
    }
}

export default ApiService;