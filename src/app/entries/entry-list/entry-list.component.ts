import { Component, OnInit } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})

// `implements OnInit` ensures that an ngOnInit function is included in the class. otherwise it throws an error
export class EntryListComponent implements OnInit {
    entries: Entry[];
    // angular uses the constructor function to instantiate components and wire up dependencies 
    constructor(private entryService: EntryService) {
    
    }
    ngOnInit() {
        this.entryService
            .getEntries()
            // sets the components entries property to be the value returned 
            .then(entries => this.entries = entries); 
    }
}