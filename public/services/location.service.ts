"use strict";

import { Injectable } from '@angular/core';

@Injectable()
class LocationService {
    constructor() { }

    public getCurrentPosition() {
        return new Promise(resolve => window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => resolve({ latitude, longitude })));
    }
}

export default LocationService;