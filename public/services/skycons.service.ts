"use strict";
import { Injectable } from '@angular/core';
declare global {
    interface Window { Skycons: any }
}
@Injectable()
class SkyconsService {
    constructor() { }

    public skycons = new window.Skycons({ color: "grey" });
}

export default SkyconsService;