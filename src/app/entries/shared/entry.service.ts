import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// allows the class to be injected as a dependency
@Injectable()

export class EntryService {
// by default, injected services are only available in the constructor funtion. by prefixing the parameter with `private`, this exposes the http service to the entire service
    constructor(private http: Http) {

    }

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[]);
    }
}